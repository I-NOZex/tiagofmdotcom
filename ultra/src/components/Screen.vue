<template>
  <div class="smartphone-screen" :class="{fullscreen: isFullscreen}" id="app">
        <router-view/>
  </div>
</template>

<script>
export default {
    props: {
        isFullscreen: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style>
.light {
  font-weight: 100;
}

.semilight {
  font-weight: 300;
}

.regular {
  font-weight: 400;
}

.semibold {
  font-weight: 600;
}

@font-face {
  font-family: 'Segoe UI Local';
  src: local('Segoe UI Light');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Local';
  src: local('Segoe UI Semilight');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Local';
  src: local('Segoe UI');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Local';
  src: local('Segoe UI Semibold');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

/** By default, use the local font and then fallback to web font. **/
body {
  font-family: 'Segoe UI Local', 'Segoe UI Web (West European)';
}

/** In Chrome we can't use the semilight weight of the local web font. Use web fonts instead. **/
body:not(*:root) {
  font-family: 'Segoe UI Web (West European)';
  background-color: #ddd;
}

.smartphone-screen {
    padding: 60px 0 60px 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}

/* The emerging W3C standard
   that is currently Firefox-only */
* {
  scrollbar-width: thin;
  scrollbar-color: #7a7a7b80 #23232b38 ;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-track {
  background: #23232b38;
}
*::-webkit-scrollbar-thumb {
  background-color: #7a7a7b80;
  border: 0px solid #23232b38;
}

 /* Hide scrollbar for Chrome, Safari and Opera */
*::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge & Firefox*/
* {
  -ms-overflow-style: none;
  scrollbar-width: none;
} 


@media (max-width: 500px) {
    .smartphone-screen {
        padding-top: 0;
        padding-bottom: 0;
    }

    .smartphone-screen.fullscreen {
        padding-top: 0;
        padding-bottom: 60px;
    }
}
</style>