<template>
	<div>
		<section class="music">
			<audio style="width: 100%;"  id="musicAudio" controls="controls" autoplay loop src="../../static/music.mp3" />
		</section>
	</div>
</template>
<script>
	export default {
		components: {
		},
		data() {
			return {
			}
		},
		methods: {
			musicPlay() {
				var music = document.getElementById("music"),
					musicAudio = document.getElementById("musicAudio");
				window.setTimeout(function() {
					musicAudio.play();
					musicAudio.addEventListener("canplay", function() {
						music.style.display = "block";
						music.className = "music move";
					}, false);
				}, 1000);
				music.addEventListener("click", function() {
					if(musicAudio.paused) {
						musicAudio.play();
						music.className = "music move";
						return;
					}
					musicAudio.pause();
					music.className = "music";
				}, false);
			}
		},
		created() { //dom还未生成

		},
		mounted() {
			//			this.musicPlay()
		},

	}
</script>

