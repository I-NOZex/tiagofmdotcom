<template>
    <div class="projects-page row-container">
        <div class="row">
            <swiper
                :options="spotlightCarouselOptions"
                class="spotlight-container"
            >

                <swiper-slide>
                    <img
                        style="width:100%"
                        class="spotlight-image"
                        :src="require('../assets/images/projects/howdy.jpg')"
                    />
                    <h2 class="spotlight-caption">Howdy - Worklife Barometer</h2>
                </swiper-slide>

                <swiper-slide>
                    <img
                        style="width:100%"
                        class="app-image"
                        :src="require('../assets/images/projects/notes.jpg')"
                    />
                    <h2 class="spotlight-caption">Hubing Notes</h2>
                </swiper-slide>

                <swiper-slide>
                    <img
                        style="width:100%"
                        class="app-image"
                        :src="require('../assets/images/projects/scan.jpg')"
                    />
                    <h2 class="spotlight-caption">Hubing Scan</h2>
                </swiper-slide>

                <div
                    class="swiper-pagination"
                    slot="pagination"
                ></div>
            </swiper>
        </div>

        <div class="row" >
            <h2 class="title">Web</h2>
            <swiper class="app-swipper" :options="appsCarouselOptions">
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/ae/07/a0/ae07a066-171a-528d-e0fd-0fa8921156c1/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-10.png/246x0w.png"
                        />
                        <p class="app-name">Howdy</p>
                        <div class="app-complexity">
                            <div class="complexity-value">💼💼💼</div>
                            <div class="complexity-excess">💼💼</div>
                        </div>
                        <p class="app-type">Private</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            :src="require('../assets/images/projects/notes_logo.png')"
                        />
                        <p class="app-name">Hubing Notes</p>
                        <div class="app-complexity">
                            <div class="complexity-value">💼💼💼💼</div>
                            <div class="complexity-excess">💼</div>
                        </div>
                        <p class="app-type">Private</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            :src="require('../assets/images/projects/no-logo.png')"
                        />
                        <p class="app-name">Stream Deck</p>
                            <div class="app-complexity">
                                <div class="complexity-value">💼💼💼</div>
                                <div class="complexity-excess">💼💼</div>
                            </div>
                        <p class="app-type">Personal</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            :src="require('../assets/images/projects/no-logo.png')"
                        />
                        <p class="app-name">Chatbot</p>
                            <div class="app-complexity">
                                <div class="complexity-value">💼💼</div>
                                <div class="complexity-excess">💼💼💼</div>
                            </div>
                        <p class="app-type">Private</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            :src="require('../assets/images/projects/no-logo.png')"
                        />
                        <p class="app-name">Interactive Video</p>
                            <div class="app-complexity">
                                <div class="complexity-value">💼</div>
                                <div class="complexity-excess">💼💼💼💼</div>
                            </div>
                        <p class="app-type">Academic</p>
                    </div>
                </swiper-slide>
                <div
                    class="swiper-button-prev"
                    slot="button-prev"
                ></div>
                <div
                    class="swiper-button-next"
                    slot="button-next"
                ></div>
            </swiper>
        </div>

        <div class="row">
            <h2>Mobile</h2>
            <swiper class="app-swipper" :options="appsCarouselOptions">
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/ae/07/a0/ae07a066-171a-528d-e0fd-0fa8921156c1/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-10.png/246x0w.png"
                        />
                        <p class="app-name">Howdy</p>
                        <div class="app-complexity">
                            <div class="complexity-value">💼💼💼</div>
                            <div class="complexity-excess">💼💼</div>
                        </div>
                        <p class="app-type">Private</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            src="https://lh3.googleusercontent.com/6b7BkFzKg1R2j7_kgcDbR6SdndkYo8Mn5LhiARUVXkBb8H30hOX4TQo9QW99lfkLjf8"
                        />
                        <p class="app-name">Hubing Scan</p>
                        <div class="app-complexity">
                            <div class="complexity-value">💼💼💼💼</div>
                            <div class="complexity-excess">💼</div>
                        </div>
                        <p class="app-type">Private</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            :src="require('../assets/images/projects/no-logo.png')"
                        />
                        <p class="app-name">Stream Deck</p>
                            <div class="app-complexity">
                                <div class="complexity-value">💼💼💼</div>
                                <div class="complexity-excess">💼</div>
                            </div>
                        <p class="app-type">Personal</p>
                    </div>
                </swiper-slide>
                <div
                    class="swiper-button-prev"
                    slot="button-prev"
                ></div>
                <div
                    class="swiper-button-next"
                    slot="button-next"
                ></div>
            </swiper>
        </div>

        <div class="row">
            <h2>Desktop</h2>
            <swiper class="app-swipper" :options="appsCarouselOptions">
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            :src="require('../assets/images/projects/notes_logo.png')"
                        />
                        <p class="app-name">Hubing Notes</p>
                        <div class="app-complexity">
                            <div class="complexity-value">💼💼💼💼</div>
                            <div class="complexity-excess">💼</div>
                        </div>
                        <p class="app-type">Private</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            :src="require('../assets/images/projects/no-logo.png')"
                        />
                        <p class="app-name">Stream Deck</p>
                        <div class="app-complexity">
                            <div class="complexity-value">💼💼💼</div>
                            <div class="complexity-excess">💼💼</div>
                        </div>
                        <p class="app-type">Personal</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            src="https://www.windowsblogitalia.com/wp-content/uploads/2019/01/Microsoft-To-Do-icona-Windows-10.png"
                        />
                        <p class="app-name">ToDo App</p>
                            <div class="app-complexity">
                                <div class="complexity-value">💼💼</div>
                                <div class="complexity-excess">💼💼💼</div>
                            </div>
                        <p class="app-type">Personal</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="app-container">
                        <img
                            class="app-image"
                            src="https://www.tenforums.com/geek/gars/images/2/types/thumb_15355743830_ticky__otes.png"
                        />
                        <p class="app-name">OneNote Sticky</p>
                            <div class="app-complexity">
                                <div class="complexity-value">💼💼💼</div>
                                <div class="complexity-excess">💼💼</div>
                            </div>
                        <p class="app-type">Personal</p>
                    </div>
                </swiper-slide>                
                <div
                    class="swiper-button-prev"
                    slot="button-prev"
                ></div>
                <div
                    class="swiper-button-next"
                    slot="button-next"
                ></div>
            </swiper>            
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },

    data() {
        return {
            appsCarouselOptions: {
                slidesPerView: 3,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            spotlightCarouselOptions: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        };
    }
};
</script>

<style lang="scss">
.projects-page {
    background-color: #2e2e2e;
    padding: 16px;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
}

.row-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: stretch;
}

.row {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    margin-bottom: 40px;
    padding-bottom: 16px;
}

.swiper-container.spotlight-container .swiper-wrapper {
    max-height: 156px;
}

.spotlight-caption {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: calc(100% - 26px - 30px);
    padding-bottom: 30px;
    height: 26px;
    text-align: center;
    margin: 0;
    font-size: 14pt;
    font-weight: 900;

    /*background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 100%);*/
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.4) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#33000000',GradientType=0 );
}

.swiper-pagination {
    position: absolute;
    bottom: 0;
}

.app-container {
    background-color: #1f1f1f;
}

.app-image {
    width: 100%;
}

.app-name {
    font-size: 9pt;
    padding: 1px 2px;
    padding-bottom: 4px;
    margin: 0;
}

.app-complexity{
    font-size: 8pt;
    padding: 2px 2px;
    margin: 0;
}

.app-complexity .complexity-value,
.app-complexity .complexity-excess {
    display: inline-block;
    filter: contrast(100%) saturate(200%);
}

.app-complexity .complexity-excess {
    filter: saturate(50%);
    opacity: 0.5;
}


.app-type {
    font-size: 8pt;
    padding: 4px 2px;
    margin: 0;
}


.swiper-button-next,
.swiper-button-prev {
    --swiper-navigation-size: 16px;
    --swiper-theme-color: white;

    background-color: #1f1f1f;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    top: 25%;
    opacity: 0.8;
    display: none;
}

.swiper-container:hover .swiper-button-prev,
.swiper-container:hover .swiper-button-next {
    display: flex;
}

.swiper-button-prev {
    left: 0;
}

.swiper-button-next {
    right: 0;
}

.swiper-button-disabled {
    visibility: hidden;
}
</style>