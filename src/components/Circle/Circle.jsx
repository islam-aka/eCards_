import React from 'react'
import './Circle.css'

const Circle = ({ inView }) => {
	return (
		<div className='svg'>
			{inView && (
				<svg
					viewBox='0 0 184 184'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g filter='url(#filter0_d_1129_53941)'>
						<mask id='path-1-inside-1_1129_53941' fill='white'>
							<path
								d='M154.783 113.629C157.594 115.045 161.043 113.921 162.245 111.012C167.788 97.5902 169.385 82.8195 166.783 68.4529C164.18 54.0862 157.503 40.8145 147.604 30.1906C145.458 27.8874 141.834 28.0444 139.698 30.357C137.562 32.6695 137.727 36.26 139.842 38.5914C147.938 47.514 153.404 58.5554 155.565 70.485C157.727 82.4145 156.481 94.6718 152.029 105.867C150.866 108.793 151.971 112.213 154.783 113.629Z'
								className='svg-elem-1'
							></path>
						</mask>
						<path
							d='M154.783 113.629C157.594 115.045 161.043 113.921 162.245 111.012C167.788 97.5902 169.385 82.8195 166.783 68.4529C164.18 54.0862 157.503 40.8145 147.604 30.1906C145.458 27.8874 141.834 28.0444 139.698 30.357C137.562 32.6695 137.727 36.26 139.842 38.5914C147.938 47.514 153.404 58.5554 155.565 70.485C157.727 82.4145 156.481 94.6718 152.029 105.867C150.866 108.793 151.971 112.213 154.783 113.629Z'
							fill='#E2E2E2'
							fillOpacity='0.3'
							stroke='#636363'
							strokeOpacity='0.4'
							strokeWidth='1.68889'
							mask='url(#path-1-inside-1_1129_53941)'
							className='svg-elem-2'
						></path>
						<mask id='path-2-inside-2_1129_53941' fill='white'>
							<path
								d='M154.699 114.035C157.449 115.44 158.557 118.82 156.954 121.459C151.455 130.51 144.115 138.33 135.386 144.399C125.125 151.534 113.262 156.028 100.849 157.483C88.4355 158.938 75.855 157.31 64.2215 152.741C52.588 148.173 42.2606 140.806 34.1542 131.294C26.0478 121.781 20.4126 110.416 17.7477 98.2048C15.0828 85.994 15.4705 73.3143 18.8764 61.2891C22.2823 49.2639 28.6014 38.2642 37.2738 29.2644C44.6504 21.6094 53.536 15.6022 63.3441 11.6094C66.2039 10.4451 69.366 12.075 70.3169 15.0127V15.0127C71.2678 17.9503 69.6451 21.0802 66.8002 22.2806C58.736 25.6835 51.4257 30.6927 45.3255 37.0232C37.929 44.6989 32.5396 54.0802 29.6348 64.3362C26.73 74.5922 26.3993 85.4064 28.6722 95.8207C30.945 106.235 35.7511 115.928 42.6648 124.041C49.5786 132.155 58.3865 138.437 68.3084 142.334C78.2303 146.23 88.96 147.619 99.5469 146.378C110.134 145.136 120.251 141.304 129.003 135.218C136.221 130.2 142.327 123.777 146.966 116.354C148.602 113.736 151.95 112.63 154.699 114.035V114.035Z'
								className='svg-elem-3'
							></path>
						</mask>
						<path
							d='M154.699 114.035C157.449 115.44 158.557 118.82 156.954 121.459C151.455 130.51 144.115 138.33 135.386 144.399C125.125 151.534 113.262 156.028 100.849 157.483C88.4355 158.938 75.855 157.31 64.2215 152.741C52.588 148.173 42.2606 140.806 34.1542 131.294C26.0478 121.781 20.4126 110.416 17.7477 98.2048C15.0828 85.994 15.4705 73.3143 18.8764 61.2891C22.2823 49.2639 28.6014 38.2642 37.2738 29.2644C44.6504 21.6094 53.536 15.6022 63.3441 11.6094C66.2039 10.4451 69.366 12.075 70.3169 15.0127V15.0127C71.2678 17.9503 69.6451 21.0802 66.8002 22.2806C58.736 25.6835 51.4257 30.6927 45.3255 37.0232C37.929 44.6989 32.5396 54.0802 29.6348 64.3362C26.73 74.5922 26.3993 85.4064 28.6722 95.8207C30.945 106.235 35.7511 115.928 42.6648 124.041C49.5786 132.155 58.3865 138.437 68.3084 142.334C78.2303 146.23 88.96 147.619 99.5469 146.378C110.134 145.136 120.251 141.304 129.003 135.218C136.221 130.2 142.327 123.777 146.966 116.354C148.602 113.736 151.95 112.63 154.699 114.035V114.035Z'
							stroke='url(#paint0_linear_1129_53941)'
							strokeWidth='20'
							strokeMiterlimit='2.46052'
							mask='url(#path-2-inside-2_1129_53941)'
							className='svg-elem-4'
						></path>
						<mask id='path-3-inside-3_1129_53941' fill='white'>
							<path
								d='M69.541 15.0005C68.6043 12.2061 70.1069 9.16196 72.9602 8.42359C84.4153 5.45922 96.4303 5.20453 108.044 7.7128C119.658 10.2211 130.497 15.4116 139.708 22.8393C142.002 24.6893 142.114 28.0823 140.108 30.241L139.613 30.7736C137.606 32.9324 134.242 33.0363 131.925 31.2148C124.233 25.1673 115.247 20.9313 105.637 18.8559C96.0277 16.7804 86.0948 16.9305 76.5923 19.2643C73.7301 19.9673 70.7088 18.4843 69.7721 15.6899L69.541 15.0005Z'
								className='svg-elem-5'
							></path>
						</mask>
						<path
							d='M69.541 15.0005C68.6043 12.2061 70.1069 9.16196 72.9602 8.42359C84.4153 5.45922 96.4303 5.20453 108.044 7.7128C119.658 10.2211 130.497 15.4116 139.708 22.8393C142.002 24.6893 142.114 28.0823 140.108 30.241L139.613 30.7736C137.606 32.9324 134.242 33.0363 131.925 31.2148C124.233 25.1673 115.247 20.9313 105.637 18.8559C96.0277 16.7804 86.0948 16.9305 76.5923 19.2643C73.7301 19.9673 70.7088 18.4843 69.7721 15.6899L69.541 15.0005Z'
							fill='#D5DCFF'
							stroke='#748BFF'
							strokeOpacity='0.5'
							strokeWidth='1.68889'
							mask='url(#path-3-inside-3_1129_53941)'
							className='svg-elem-6'
						></path>
					</g>
					<defs>
						<filter
							id='filter0_d_1129_53941'
							x='0.373832'
							y='0.317757'
							width='183.252'
							height='183.252'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							></feColorMatrix>
							<feOffset dy='9.94392'></feOffset>
							<feGaussianBlur stdDeviation='7.81308'></feGaussianBlur>
							<feComposite in2='hardAlpha' operator='out'></feComposite>
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0.08 0'
							></feColorMatrix>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow_1129_53941'
							></feBlend>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow_1129_53941'
								result='shape'
							></feBlend>
						</filter>
						<linearGradient
							id='paint0_linear_1129_53941'
							x1='24.2194'
							y1='144.85'
							x2='164.163'
							y2='5.47708'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#7AAFFF'></stop>
							<stop offset='1' stopColor='#642DFF'></stop>
						</linearGradient>
					</defs>
				</svg>
			)}
		</div>
	)
}

export default Circle
