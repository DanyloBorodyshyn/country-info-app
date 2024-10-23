<script lang="ts" setup>
interface YearBlock {
  year: string | number;
  selectedBlock: boolean;
}
withDefaults(defineProps<YearBlock>(), {
  year: 2024,
});
const emit = defineEmits(['select']);
const selectYear = (year: string | number) => {
  emit('select', year);
};
</script>

<template>
  <div
    :class="{ 'bg-orange-500': selectedBlock, 'bg-yellow': !selectedBlock }"
    class="px-5 py-3 cursor-pointer"
    @click="selectYear(year)"
  >
    <p>{{ year }}</p>
  </div>
</template>
