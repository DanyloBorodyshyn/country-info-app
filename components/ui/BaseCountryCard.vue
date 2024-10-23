<script lang="ts" setup>
interface CardProps {
  item: {
    countryCode: string;
    countryName?: string;
    nextHoliday?: string;
    holidayDate?: string;
    name?: string;
  } | null;
  widget?: boolean;
}

const emit = defineEmits(['goTo']);

withDefaults(defineProps<CardProps>(), {
  item: null,
});

const selectFunc = (code: string) => {
  emit('goTo', code);
};
</script>

<template>
  <div
    v-if="item"
    class="bg-yellow rounded p-5 cursor-pointer"
    @click="selectFunc(item.countryCode)"
  >
    <p v-if="!widget" class="text-center">{{ item.name }}</p>
    <div v-else>
      <p class="text-xl">{{ item.countryName }}</p>
      <p class="text-xl">{{ item.nextHoliday }}</p>
      <p class="text-xl">{{ item.holidayDate }}</p>
    </div>
  </div>
</template>
