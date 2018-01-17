<template>
    <li :class="itemClasses">
        <div :class="tailClasses"></div>
        <div :class="headClasses" :style="customColor" ref="dot"><slot name="dot"></slot></div>
        <div :class="contentClasses">
            <slot></slot>
        </div>
    </li>
</template>
<script>
    const prefixCls = 'py-timeline';

    export default {
        name: 'PyTimelineItem',
        props: {
            color: {
                type: String,
                default: 'primary'
            }
        },
        data () {
            return {
                dot: false
            };
        },
        mounted () {
            this.dot = this.$refs.dot.innerHTML.length ? true : false;
        },
        computed: {
            itemClasses () {
                return `${prefixCls}-item`;
            },
            tailClasses () {
                return `${prefixCls}-item__tail`;
            },
            headClasses () {
                return [
                    `${prefixCls}-item__head`,
                    {
                        [`${prefixCls}-item__head--custom`]: this.dot,
                        [`${prefixCls}-item__head--${this.color}`]: this.headColorShow
                    }
                ];
            },
            headColorShow () {
                return this.color == 'primary' || this.color == 'danger' || this.color == 'success';
            },
            customColor () {
                let style = {};
                if (this.color) {
                    if (!this.headColorShow) {
                        style = {
                            'color': this.color,
                            'border-color': this.color
                        };
                    }
                }

                return style;
            },
            contentClasses () {
                return `${prefixCls}-item__content`;
            }
        }
    };
</script>
