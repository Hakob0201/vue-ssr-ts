<script setup>
defineProps({
  url: {
    type: String,
    default: () => null
  },
  fullName: {
    type: String,
    default: () => null
  }
});

const speakerInitials = (speaker) => {
  if (!speaker) return;
  const name = speaker.split(' ');
  return `<div class="profile-image" style="background-color: #${(
    (Math.random() * 0xffffff) <<
    0
  ).toString(16)}">${name[0].charAt(0)}${
    name[1] ? name[1].charAt(0) : ''
  }</div>`;
};
</script>

<template>
  <div class="flex-shrink-0">
    <template v-if="url">
      <img
        class="h-48 w-full object-cover"
        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
        alt=""
      />
    </template>
    <template v-else>
      <span v-html="speakerInitials(fullName)"></span>
    </template>
  </div>
</template>

<style scoped>
::v-deep .profile-image {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #512da8;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 36px;
  margin: 20px 0;
  text-transform: uppercase;
}
</style>
