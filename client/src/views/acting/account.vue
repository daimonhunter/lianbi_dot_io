<template>
  <div class="account">
    <div>
      <div class="recharge-top" v-loading="loading">
        <el-row>
          <el-col :span="18" class="left">
            <h5>充值地址</h5>
            <div>
              <!-- <span>{{recData.address}}</span> -->
              <el-input v-model="walletAddr" readonly ref="copyInput"></el-input>
              <i class="el-icon-document" @click="handleCopy"></i>
            </div>
            <!--<p>-->
            <!--提示：<span>单笔充值不得低于0.003{{tokenData.symbol}}</span>，-->
            <!--我们不会处理少于该金额的{{tokenData.symbol}}充值要求。-->
            <!--</p>-->
          </el-col>
          <el-col :span="6" class="right">
            <vue-qr :text="walletAddr" :margin="10" class="qrcode"></vue-qr>
            <p>或扫二维码立即充值</p>
          </el-col>
        </el-row>
      </div>

      <div class="recharge-bottom" v-loading="balanceLoad">
        <h5 class="title">
          资产余额<i class="el-icon-refresh" @click="handleRefresh"></i>
        </h5>
        <el-row>
          <el-col :span="12" v-for="(asset, index) in assetList" :key="index">
            <span>{{asset.amount}}</span>
            <small>{{asset.symbol}}</small>
          </el-col>
          <!--<el-col :span="12">-->
            <!--<span>{{ethData.amount}}</span>-->
            <!--<small>EHT</small>-->
          <!--</el-col>-->
        </el-row>
      </div>

      <!--<div>-->
        <!--<h5 class="title">-->
          <!--充值记录<i class="el-icon-refresh" @click="handleRefresh"></i>-->
        <!--</h5>-->
        <!--<ul class="filter">-->
          <!--<li v-for="item  in option.list" :key="item.value" :class="{active: option.value === item.value}" @click="handleCLick(item.value)">-->
              <!--{{item.name}}-->
          <!--</li>-->
        <!--</ul>-->
        <!--<el-table :data="list" style="width: 100%">-->
          <!--<el-table-column prop="id" label="序号" width="100"></el-table-column>-->
          <!--<el-table-column prop="address" label="地址"></el-table-column>-->
          <!--<el-table-column prop="number" label="数量" width="180"></el-table-column>-->
          <!--<el-table-column prop="status" label="状态" width="180">-->
            <!--<template slot-scope="scope">-->
              <!--<span :class="scope.row.status === 1 ? 'text-success' : ''">-->
                <!--{{['验证中', '已完成'][scope.row.status]}}-->
              <!--</span>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column prop="time" label="时间"></el-table-column>-->
        <!--</el-table>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import VueQr from 'vue-qr'
import bus from '@/utils/bus'
export default {
  components: {
    VueQr
  },
  data () {
    return {
      recData: { // 充值数据
        address: '0xsajaiaksoalksidujh8093jd84kd9s0a9djhvu87'
      },
      assets: { // 资产余额
        BVC: 2000,
        EHT: 378,
        BTC: 288
      },
      list: [{
        id: 9,
        address: 'sjjdhdhd',
        number: 300,
        status: 1,
        time: '2017-09-09'
      }],
      option: {
        value: 0,
        list: [{
          value: 0,
          name: '全部'
        }, {
          value: 1,
          name: 'BCV'
        }, {
          value: 2,
          name: 'ETH'
        }, {
          value: 3,
          name: 'BTC'
        }]
      },
      tokenProtocol: 1,
      assetList: [],
      walletAddr: '',
      loading: false,
      balanceLoad: false
    }
  },
  computed: {
    ...mapState({
      path: state => state.route.path
    }),
    tokenData () {
      let tokenData = {}
      console.log('tokendata')
      this.assetList.forEach(item => {
        if (parseInt(item.tokenId) === parseInt(this.orderData.tokenId)) {
          tokenData = item
        }
      }, this)
      return tokenData
    },
    ethData () {
      let ethData = {}
      this.assetList.forEach(item => {
        if (item.symbol === 'ETH') {
          ethData = item
        }
      })
      return ethData
    }
  },
  created () {
    let that = this
    bus.$on('handleEmit', (data) => {
      if (data) that.recData = data
    })
  },
  mounted () {
    console.log('mounted')
    this.fetchBalance()
    this.getWallet()
  },
  destroy () {
    console.log('destroy')
  },
  methods: {
    ...mapActions(['getDispenseBalance', 'getDispenseWallet']),
    fetchBalance () {
      this.balanceLoad = true
      this.getDispenseBalance({
        tokenProtocol: this.tokenProtocol
      }).then((data = {}) => {
        this.assetList = data.dataList
        this.balanceLoad = false
      })
    },
    getWallet () {
      this.loading = true
      this.getDispenseWallet({
        tokenProtocol: this.tokenProtocol
      }).then((data = {}) => {
        this.loading = false
        this.walletAddr = data.walletAddr
      })
    },
    handleCopy () {
      let eInput = this.$refs.copyInput.$el.firstElementChild
      eInput.select()
      document.execCommand('Copy')
      this.$message.success('复制成功!')
    },
    handleRefresh () {
      this.fetchBalance()
    },
    handleCLick (val) {
      this.option.value = val
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/variables';
.account{
  padding: 80px 0;
  .recharge-top{
    .left{
      & > div{
        padding: 30px;
        overflow: hidden;
        .el-input{
          width: 80%;
          float: left;
        }
        span, input{
          background: #fcf7f1;
          border: 1px solid $primary-color;
          height: 40px;
          line-height: 40px;
          padding: 0 20px;
        }
        i{
          color: $primary-color;
          font-size: 30px;
          float: left;
          margin-left: 10px;
          margin-top: 10px;
          cursor: pointer;
        }
      }
      p{
        padding: 0 0 30px 30px;
        margin-top: 10px;
        color: $gray;
        font-size: 12px;
        span{
          color: salmon;
        }
      }
    }
    .right{
      .qrcode, .qrcode img{
        width: 120px;
        height: 120px;
      }
      p{
        font-size: 12px;
        color: #ccc;
        line-height: 40px;
      }
    }
  }
  .recharge-bottom{
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .el-row{
      padding: 30px;
    }
    span{
      font-size: 28px;
      color: $primary-color;
    }
  }
  .recharge-footer{
    text-align: right;
    padding: 20px;
  }
  h5.title{
    margin-top: 50px;
    i{
      margin-left: 10px;
      padding: 3px;
      background: #fcf7f1;
      border: 1px solid $primary-color;
      color: $primary-color;
    }
  }
  .filter{
    overflow: hidden;
    li{
      float: left;
      cursor: pointer;
      padding: 5px 15px;
      font-size: 12px;
    }
    .active{
      color: #fff;
      background-color: $primary-color;
    }
  }
}
@media (max-width: 767px) {
  .account{
    padding: 10px 0;
    .recharge-top{
      .left{
        width: 100%;
        p{
          padding: 0;
        }
        div{
          padding: 0px;
        }
      }
      .right{
        width: 100%;
        text-align: center;
        .qrcode{
          margin: 0 auto;
        }
      }
    }
    .recharge-bottom{
      .el-row{
        padding: 10px 0;
      }
    }
  }
}
</style>
