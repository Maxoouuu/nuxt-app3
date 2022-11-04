<template>

    <span v-html="tweetButton" />

    <A HREF="mailto:san@antonio.net
?subject=Notre affaire
&cc=partenaire@antonio.net
&bcc=avocat@antonio.net
&body=Bonjour">san@antonio.net</A>

    <a href="https://www.facebook.com/intent/">facebook</a>


</template>

<script>

export default {
    data() {
        return {
            tweetButton: '',
            twttr: {}
        }
    },
    props: {
        shareLink: String
    },
    mounted() {
        this.renderTweetButton()
    },
    methods: {
        renderTweetButton() {

            this.tweetButton = `<a
        class="twitter-share-button"
        data-via="Example"
        data-size="large"
        url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Ffr%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0H8SWfI_DAbfQk86eaSubl&ust=1667646707645000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDZqJ6ylPsCFQAAAAAdAAAAABAE"
        data-text="Check this out!"
        data-url="https://mywebsite.com/${this.shareLink}"
        href="https://twitter.com/intent/tweet">
      Tweet<img :src"/assets/img/alexis.png"></img></a>`

            this.twttr = (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function (f) {
                    t._e.push(f);
                };

                return t;
            }(document, "script", "twitter-wjs"));
        }
    },
    watch: {
        shareLink() {
            this.renderTweetButton()
            this.twttr.widgets.load()
        }
    }
}
</script>

<style lang="sass" scoped>
</style>



