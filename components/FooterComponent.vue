<template>
  <footer class="footer">
    <p>The Reef card is issued by Optimus Cards UK Limited, a principal member of Mastercard and authorized as an E-Money Institution by the Financial Conduct Authority (Firm Reference Number 902034). Optimus Cards UK Ltd is registered in England & Wales, No. 09044866 with their Registered Office address at Suite A, 6 Honduras Street, London, England, EC1Y 0TH</p>

    <div class="footer__links">
      <a
        v-for="(url, title) in $options.links"
        :key="`${title}-${url}`"
        :href="url"
        :title="title"
        target="_blank"
      >{{ title }}</a>
    </div>
  </footer>
</template>

<script>
export default {
  links: {
    'Reef Privacy Policy': '#',
    'Reef User Facing Fees': '#',
    'Card Fee Information GBP': '#',
    'Card Fee Information EUR': '#',
    'Optimus Privacy Policy': '#',
    'Card Terms': '#',
    'Digital wallet terms and conditions': '#'
  }
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: rgba(white, 0.65);
  border-top: solid 1px rgba(white, 0.2);
  font-size: 13px;
  padding-top: 25px;
  text-align: center;

  p {
    margin: 0;
  }

  .footer__links {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    a {
      color: currentColor;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: white;
      }

      & + a {
        margin-left: 25px;
      }
    }
  }
}
</style>
