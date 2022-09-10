<template>
  <div class="home center">
    <h3 class="accent welcome">{{ subname }}</h3>
    <Logo width="350px" />
    <Donate />
    <ProjectLink />
    <Credits />
  </div>
</template>

<script>
import ProjectLink from "../components/home/ProjectLink.vue";
import Credits from "../components/home/Credits.vue";
import configs from "../configs";
import Logo from "../components/common/Logo.vue";
import Donate from "../components/common/Donate.vue";

export default {
  name: "Home",
  components: {
    ProjectLink,
    Credits,
    Logo,
  },
  created() {
    document.title = "CatalystOS | Downloads";
    document.head.querySelector("meta[name=description]").content = "CatalystOS | Downloads";
  },
  computed: {
    subname() {
      return configs.APP_SUBNAME;
    },
    description() {
      return configs.APP_DESC;
    },
  },
};
</script>
