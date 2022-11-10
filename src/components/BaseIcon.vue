<template>
	<InlineSvg
		:src="`/raw-icons/${name}.svg`"
		class="fill-current"
		fill="red"
	/>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
	components: { InlineSvg },
	props: {
		name: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: false,
		},
	},
};
</script>
<style>
.fill-current {
	color: v-bind(color) !important;
	width: 64px;
	height: 64px;
}

/* svg path {
    color: v-bind(color) !important;
    fill: currentcolor;
} */
</style>