<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import "swiper/css/pagination"
	import "swiper/css/mousewheel"
	import "swiper/css/scrollbar"
	import "swiper/css/effect-fade"

	// import Swiper core and required modules
	import SwiperCore, {
	  Mousewheel, Pagination, Scrollbar, Autoplay, EffectFade, EffectCreative
	} from 'swiper';
	// install Swiper modules
	SwiperCore.use([Mousewheel, Pagination, Scrollbar, Autoplay, EffectFade, EffectCreative]);

	// 주소 복사
	import CopyClipBoard from './CopyClipBoard.svelte';

	let name = '대구 북구 복현로';

	const copy = () => {
		const app = new CopyClipBoard({
			target: document.getElementById('clipboard'),
			props: { name },
		});
		app.$destroy();
	}

	const pagination = {
	  "clickable": true,
	  "renderBullet": function (index, className) {

	          return '<span class=\"' + className + '\"><p>' + (index + 1) + '</p></span>';

	        }
	}
</script>

<main class="main">
	<style type="text/css">
		#photo_album .swiper-pagination-bullet {
			margin-left: 10px;
			margin-right: 10px;
			width: 28px;
			height: 28px;
			text-align: center;
			line-height: 20px;
			font-size: 24px;
			color: #000;
			opacity: 1;
			background: rgba(50, 50, 50, 0.2);
		}

		#photo_album .swiper-pagination-bullet-active {
		  color: #000;
		  background: rgba(255, 212, 0, 0.9);
		}

		#photo_album p {
			font-family: 'ONE-Mobile-POP';
			margin-top: 5px;
			color: #fff;
		}
	</style>
	<Swiper direction="{'vertical'}" slidesPerView="{'auto'}" spaceBetween="{0}" freeMode="{true}" mousewheel="{true}" pagination='{{
		  "clickable": true,
		}}' id="mySwiper">
		<SwiperSlide class="first_page">
			<!-- <Swiper grabCursor="{true}" effect="{'creative'}" creativeEffect='{{
			  "prev": {
			    "shadow": true,
			    "translate": [
			      0,
			      0,
			      -400
			    ]
			  },
			  "next": {
			    "translate": [
			      "100%",
			      0,
			      0
			    ]
			  }
			}}' id="main_swiper"> -->
			<Swiper spaceBetween="{30}" effect="{'fade'}" navigation="{true}" pagination='{{
			  "clickable": true
			}}' autoplay='{{
				  "delay": 2500,
				  "disableOnInteraction": false
				}}' id="main_swiper" name="main_swiper">
				<SwiperSlide id="photo_1"></SwiperSlide>
				<SwiperSlide id="photo_2"></SwiperSlide>
				<SwiperSlide id="photo_3"></SwiperSlide>
			</Swiper>
			<div id=phrases>
				<h2>결혼합니다</h2>
				<p>더 이상 싸우지 않고</p>
				<p>잘 지낼 수 있도록</p>
				<p>많은 관심과 사랑 부탁드립니다.</p>
				<h2>2021.11.14 14:20</h2>
				<h2>더 베네치아</h2>
				<h2>잠실</h2>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<Swiper id="photo_album" name="photo_album" class="mySwiper2 swiper-v" preloadImages="{true}" lazy="{true}" slidesPerView="{3}" spaceBetween="{-6}" pagination='{pagination}' autoplay='{{
				  "delay": 2500,
				  "disableOnInteraction": false
				}}'>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/1.jpg" alt="" class="swiper-lazy">
						<img src="img/album/2.jpg" alt="" class="swiper-lazy">
						<img src="img/album/3.jpg" alt="" class="swiper-lazy">
						<img src="img/album/4.jpg" alt="" class="swiper-lazy">
						<img src="img/album/5.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/6.jpg" alt="" class="swiper-lazy">
						<img src="img/album/7.jpg" alt="" class="swiper-lazy">
						<img src="img/album/8.jpg" alt="" class="swiper-lazy">
						<img src="img/album/9.jpg" alt="" class="swiper-lazy">
						<img src="img/album/10.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/11.jpg" alt="" class="swiper-lazy">
						<img src="img/album/12.jpg" alt="" class="swiper-lazy">
						<img src="img/album/13.jpg" alt="" class="swiper-lazy">
						<img src="img/album/14.jpg" alt="" class="swiper-lazy">
						<img src="img/album/15.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/16.jpg" alt="" class="swiper-lazy">
						<img src="img/album/17.jpg" alt="" class="swiper-lazy">
						<img src="img/album/18.jpg" alt="" class="swiper-lazy">
						<img src="img/album/19.jpg" alt="" class="swiper-lazy">
						<img src="img/album/20.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/21.jpg" alt="" class="swiper-lazy">
						<img src="img/album/22.jpg" alt="" class="swiper-lazy">
						<img src="img/album/23.jpg" alt="" class="swiper-lazy">
						<img src="img/album/24.jpg" alt="" class="swiper-lazy">
						<img src="img/album/25.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/26.jpg" alt="" class="swiper-lazy">
						<img src="img/album/27.jpg" alt="" class="swiper-lazy">
						<img src="img/album/28.jpg" alt="" class="swiper-lazy">
						<img src="img/album/29.jpg" alt="" class="swiper-lazy">
						<img src="img/album/30.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
			</Swiper>
		</SwiperSlide>
		<SwiperSlide id="map_page" class="map">
			<img class="map_img" src="img/map.png" />
			<p>주소: {name}</p>
			<input bind:value={name}>
			<button class="btn btn-primary" on:click={copy}>주소복사하기</button>
			<div id="clipboard"></div>
		</SwiperSlide>
		<SwiperSlide class="contact">
			<div class="grid-container">
				<div class='grid-item'><p class='contact_title'>마음 전하실 곳</p></div>
				<div class='grid-item'></div>
				<div class='grid-item'></div>
				<div class='grid-item'><a href='https://qr.kakaopay.com/28100601100004868083261861a807333'><img class='kakaopay' src='img/kakaopay.png' /></a></div>
				<div class='grid-item'><a href='https://qr.kakaopay.com/28100601100004868083261861a807333'><img class='kakaopay' src='img/kakaopay.png' /></a></div>
				<div class='grid-item'><a href='tel:01073003086'><img class='phone' src='img/phone.jpg'/></a></div>
				<div class='grid-item'><a href='tel:01073003086'><img class='phone' src='img/phone.jpg'/></a></div>
			</div>
		</SwiperSlide>
	</Swiper>

	<script>

		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		    mapOption = { 
		        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		        level: 3 // 지도의 확대 레벨
		    };

		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		var map = new kakao.maps.Map(mapContainer, mapOption);

		var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
		    position: markerPosition
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);

		var iwContent = '<div style="padding:5px;">예식장 <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

		// 인포윈도우를 생성합니다
		var infowindow = new kakao.maps.InfoWindow({
		    position : iwPosition, 
		    content : iwContent 
		});

		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
		infowindow.open(map, marker);
	</script>
</main>

<style>
	main {
		text-align: center;
		/*padding: 1em;*/
		/*max-width: 240px;*/
		margin: 0 auto;
		/*margin-top: 60px;*/
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	/*@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}*/
</style>