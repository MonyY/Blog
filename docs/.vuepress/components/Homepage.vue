<template lang="pug">
  .home
    .wrapper
      transition(appear name="moveDown")
        .avatar
          img(src="https://monyy.github.io/Mony/me.jpeg" alt="我的照片而已")
      transition(appear name="moveUp")
        .card
          .bio
            .head
              span {{data.head}}
              br
              span.spit {{data.spit}}😂
            .info
              span {{data.info}}
            .description
              Content
      .footer(v-if="data.footer") {{ data.footer }}
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './styles/config.styl'
body
  .home
    max-width 100%
    background-color $homeBgColor
    min-height calc(100vh - 6rem)
    display flex
    padding 2.4rem 2rem 0
  @media (max-width: $MQMobileNarrow)
    .home
      padding-left 0
      padding-right 0
      padding 1rem 0.5rem
.wrapper
  width 100%
  display: flex
  flex-direction column
  align-items center
  .avatar 
    position relative
    z-index 1
    img
      display block
      width 100%
      height auto
      max-width 150px
      border-radius 5rem
  .card
    max-width: 600px
    width 100%
    position relative
    top -75px
    padding-top 75px
    margin-left auto 
    margin-right auto 
    background #fff
    box-shadow 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius 0.3rem
    text-align center 
    .bio
      padding 1em
      .head
        font-weight 700
        font-size 1.3em
        .spit
          font-weight normal
          font-size 1rem
      .info
        padding-top 0.5rem
        font-size 1em
        color rgba(0,0,0,.4)
      .description
        text-align justify
        p
          padding 0.8em 0.5em 0
          line-height normal
          -webkit-margin-before 0em
          -webkit-margin-after 0em
          a
            font-weight normal
  .footer
    padding 1rem
    font-weight 200
    font-size 1rem
    text-align center
    color lighten($footColor, 25%)
    margin-top auto
// 动画
.moveDown-enter-active, .moveDown-leave-active
  opacity 1
  transition all 1s

.moveDown-enter, .moveDown-leave-to
  transform translateY(-40px)
  opacity 0

.moveUp-enter-active, .moveUp-leave-active
  opacity 1
  transition all 1s

.moveUp-enter, .moveUp-leave-to
  transform translateY(40px)
  opacity 0
</style>
