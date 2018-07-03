<template>
    <footer class="footer">
        <div class="footer__author">
            <h3>@Giacomo Ciampoli</h3>
        </div>
        <div class="footer__links">
            <a href="https://github.com/Gillis86" target="_blank">
                <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="mailto:gillispeare.dev@gmail.com">
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </a>
        </div>
    </footer>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .footer{
        width:100%;
        background:#1DA1F2;
        display: flex;
        justify-content: center;
        align-items: center;
        &__links{
            & a{
                color:#fff;
                &:not(:last-child){
                    margin-right:30px;
                }
            }
        }

        &__author{
            padding:30px;
            & h3{
                text-transform: uppercase;
                color:#fff;
                font-size:16px;
            }
        }
    }
</style>