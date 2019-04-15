<template>
  <div class="wrapper fixed">
      <div class="content-wrapper" >
        <el-scrollbar tag="div" wrapClass="content-scrollbar">
              <router-view></router-view>
        </el-scrollbar>
      </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {mapGetters, mapActions,mapMutations} from 'vuex'
  import * as types from "./store/mutation-types"
  export default {
    name: 'app',
    components: {
    },
    computed: {
    },
    data: function () {
      return {
        active: true,
        headerFixed: true,
        breadcrumb: [],
      }
    },
    methods: {
    },
    watch: {
    },
    beforeMount () {
    },
    mounted () {
    },
    created () {
    }
  }

</script>

<style>
	html, body{
		font-size: 14px;
		height: 100% !important;
		width: 100%;
	}
  .animated {
    animation-duration: .2s;
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }

  *,:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }


  .content-wrapper {
    -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    margin-left: 230px;
    padding-top: 50px;
  }

  .content-scrollbar{
    height: calc(100vh - 50px);
  }

  .content-wrapper .el-scrollbar__bar.is-vertical{
    display: none;
  }

  .content-wrapper .content {
    padding: 1.25rem;
  }

  .content-wrapper.slideCollapse{
    margin-left: 44px;
  }

  .content-wrapper.mobileSide{
    margin-left: 0px;
  }

</style>
