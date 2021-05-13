<template>
  <fullscreen ref="fullscreen" @change="fullscreenChange" class="smartphone-frame">
        <Forehead class="hidden-mobile"/>

        <div class="visible-mobile modal-overlay" v-if="showFullscreenMessage">
            <div class="modal-content">
                <div class="modal-message">
                    <p>For a better experience, it's recommended to toggle into fullscreen mode.</p>
                    <p class="info"><fa :icon="['fas', 'exclamation-circle']" /> Notice that pressing the back button of your device will exit from fullscreen mode.</p>
                </div>
                <div class="modal-commands">
                    <button class="button" @click="toggle">Go Fullscreen</button>
                    <button class="button" @click="showFullscreenMessage = false">Dismiss</button>
                </div>
            </div>
        </div>

        <Screen :isFullscreen="fullscreen"/>
        <Chin :class="{'hidden-mobile': !fullscreen}"/>
  </fullscreen>
</template>

<script>
import Forehead from './Forehead';
import Screen from './Screen';
import Chin from './Chin';

import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(fullscreen)

export default {
    data() {
      return {
        fullscreen: false,
        showFullscreenMessage: true,
      }
    },

    components: {
        Forehead, Screen, Chin
    },

    methods: {
        toggle () {
            this.$refs['fullscreen'].toggle();
            this.showFullscreenMessage = false;
        },
        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
        }
    },
}
</script>

<style lang="scss">


.smartphone-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    height: calc(100vh - 60px);
    width: calc(404px - 60px);
    max-height: 670px;
    border: 16px solid #0c0c0d;
    border-bottom-width: 18px;
    border-radius: 40px;
    box-shadow: 
    (-$frameThickness) (-$frameThickness) 2px $frameGrey,
    (-$frameThickness) $frameThickness 2px $frameGrey,
    $frameThickness (-$frameThickness) 2px $frameGrey,
    $frameThickness $frameThickness 2px $frameGrey,
}

.modal-overlay {
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    z-index: 9999;
}

.modal-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #323232;
    padding: 20px;
}

.modal-content .modal-message {
    justify-content: center;
    color: white;
    margin-bottom: 20px;
}

.info {
    font-size: 10pt;
    color: #46a5ff;
}

.modal-content .modal-commands .button {
    background-color: #5b5b5b;
    color: white;
    border: none;
    margin-right: 10px;
    padding: 6px 18px;
}

.modal-content .modal-commands .button:last-child {
    margin-right: 0px;
}

@media (max-width: 500px) {
    .smartphone-frame {
        margin: 0 auto;
        position: relative;
        height: 100vh;
        width: 100%;
        max-height: 100%;
        border: none;
        border-radius: 0px;
        box-shadow: 
        (-$frameThickness) (-$frameThickness) 2px $frameGrey,
        (-$frameThickness) $frameThickness 2px $frameGrey,
        $frameThickness (-$frameThickness) 2px $frameGrey,
        $frameThickness $frameThickness 2px $frameGrey,
    }
    
    .hidden-mobile {
        display: none;
    }
}

@media (min-width: 501px) {
    .visible-mobile {
        display: none;
    }
}
</style>