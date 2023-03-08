import React from 'react'
import './Circle.css'

const Circle = ({ inView }) => {
	return (
		<div className='svg'>
			{inView && (
				<svg
					className='svg'
					viewBox='0 0 153 153'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<mask
						id='mask0_2117_120886'
						masktype='luminance'
						maskUnits='userSpaceOnUse'
						x='121'
						y='22'
						width='32'
						height='89'
					>
						<path
							d='M138.783 108.629C141.594 110.045 145.043 108.921 146.245 106.012C151.788 92.5902 153.385 77.8195 150.783 63.4529C148.18 49.0862 141.503 35.8145 131.604 25.1906C129.458 22.8874 125.834 23.0444 123.698 25.357C121.562 27.6695 121.727 31.26 123.842 33.5914C131.938 42.514 137.404 53.5554 139.565 65.485C141.727 77.4145 140.481 89.6718 136.029 100.867C134.866 103.793 135.971 107.213 138.783 108.629Z'
							fill='#E2E2E2'
							fillOpacity='0.3'
							stroke='#636363'
							strokeOpacity='0.4'
							strokeWidth='1.68889'
							className='eboqmdWA_0'
						></path>
					</mask>
					<g mask='url(#mask0_2117_120886)'>
						<path
							d='M138.783 108.629C141.594 110.045 145.043 108.921 146.245 106.012C151.788 92.5902 153.385 77.8195 150.783 63.4529C148.18 49.0862 141.503 35.8145 131.604 25.1906C129.458 22.8874 125.834 23.0444 123.698 25.357C121.562 27.6695 121.727 31.26 123.842 33.5914C131.938 42.514 137.404 53.5554 139.565 65.485C141.727 77.4145 140.481 89.6718 136.029 100.867C134.866 103.793 135.971 107.213 138.783 108.629Z'
							fill='#E2E2E2'
							fillOpacity='0.3'
							stroke='#636363'
							strokeOpacity='0.4'
							strokeWidth='1.68889'
							className='eboqmdWA_1'
						></path>
					</g>
					<mask
						id='mask1_2117_120886'
						masktype='luminance'
						maskUnits='userSpaceOnUse'
						x='-7'
						y='-1'
						width='155'
						height='161'
					>
						<path
							d='M138.018 108.966C140.755 110.373 141.858 113.758 140.262 116.402C134.79 125.467 127.486 133.299 118.8 139.378C108.59 146.524 96.7848 151.025 84.4327 152.482C72.0801 153.94 59.5613 152.309 47.9849 147.733C36.4085 143.158 26.1318 135.779 18.0651 126.252C9.9985 116.724 4.39095 105.341 1.73913 93.1108C-0.912698 80.8808 -0.5269 68.1812 2.86229 56.137C6.25148 44.0929 12.5396 33.0759 21.1694 24.0619C28.5098 16.3949 37.3518 10.3782 47.1118 6.37916C49.9576 5.21302 53.1042 6.84549 54.0504 9.78781C54.9966 12.73 53.3819 15.8649 50.5509 17.0671C42.5263 20.4754 35.2519 25.4925 29.1816 31.8329C21.8214 39.5207 16.4584 48.9168 13.5679 59.1889C10.6774 69.4611 10.3483 80.2923 12.61 90.723C14.8717 101.154 19.6542 110.862 26.534 118.988C33.4138 127.114 42.1785 133.406 52.0517 137.309C61.925 141.212 72.602 142.603 83.137 141.36C93.6721 140.116 103.739 136.278 112.449 130.182C119.631 125.156 125.707 118.723 130.323 111.289C131.951 108.666 135.283 107.559 138.018 108.966Z'
							stroke='url(#paint0_linear_2117_120886)'
							strokeWidth='13'
							strokeMiterlimit='2.46052'
							className='eboqmdWA_2'
						></path>
					</mask>
					<g mask='url(#mask1_2117_120886)'>
						<mask id='path-4-inside-1_2117_120886' fill='white'>
							<path
								d='M138.699 109.035C141.449 110.44 142.557 113.82 140.954 116.459C135.455 125.51 128.115 133.33 119.386 139.399C109.125 146.534 97.262 151.028 84.849 152.483C72.4355 153.938 59.855 152.31 48.2215 147.741C36.588 143.173 26.2606 135.806 18.1542 126.294C10.0478 116.781 4.4126 105.416 1.7477 93.2048C-0.917198 80.994 -0.529498 68.3143 2.8764 56.2891C6.2823 44.2639 12.6014 33.2642 21.2738 24.2644C28.6504 16.6094 37.536 10.6022 47.3441 6.6094C50.2039 5.4451 53.366 7.075 54.3169 10.0127C55.2678 12.9503 53.6451 16.0802 50.8002 17.2806C42.736 20.6835 35.4257 25.6927 29.3255 32.0232C21.929 39.6989 16.5396 49.0802 13.6348 59.3362C10.73 69.5922 10.3993 80.4064 12.6722 90.8207C14.945 101.235 19.7511 110.928 26.6648 119.041C33.5786 127.155 42.3865 133.437 52.3084 137.334C62.2303 141.23 72.96 142.619 83.5469 141.378C94.134 140.136 104.251 136.304 113.003 130.218C120.221 125.2 126.327 118.777 130.966 111.354C132.602 108.736 135.95 107.63 138.699 109.035Z'
								className='eboqmdWA_3'
							></path>
						</mask>
						<path
							d='M138.699 109.035L129.597 126.844L129.6 126.845L138.699 109.035ZM140.954 116.459L158.047 126.844L158.048 126.842L140.954 116.459ZM119.386 139.399L107.969 122.978L107.968 122.979L119.386 139.399ZM84.849 152.483L87.1773 172.347L87.1774 172.347L84.849 152.483ZM48.2215 147.741L55.5327 129.125L55.5314 129.125L48.2215 147.741ZM18.1542 126.294L2.9315 139.266L2.93217 139.267L18.1542 126.294ZM1.7477 93.2048L21.2878 88.9405L21.2878 88.9404L1.7477 93.2048ZM21.2738 24.2644L6.87221 10.3866L6.87214 10.3866L21.2738 24.2644ZM47.3441 6.6094L54.885 25.1333L54.8856 25.1331L47.3441 6.6094ZM54.3169 10.0127L35.2889 16.1718L35.289 16.172L54.3169 10.0127ZM50.8002 17.2806L43.0251 -1.14621L43.0246 -1.14602L50.8002 17.2806ZM29.3255 32.0232L43.7271 45.901L43.7272 45.9009L29.3255 32.0232ZM12.6722 90.8207L32.2123 86.5563L32.2122 86.5561L12.6722 90.8207ZM26.6648 119.041L41.8879 106.07L41.8872 106.069L26.6648 119.041ZM52.3084 137.334L44.9968 155.95L44.9984 155.95L52.3084 137.334ZM83.5469 141.378L85.8754 161.242L85.8772 161.242L83.5469 141.378ZM113.003 130.218L101.587 113.796L101.585 113.798L113.003 130.218ZM130.966 111.354L147.926 121.953L147.927 121.953L130.966 111.354ZM129.6 126.845C122.897 123.421 118.917 114.215 123.86 106.076L158.048 126.842C166.197 113.425 160.001 97.4593 147.798 91.2249L129.6 126.845ZM123.861 106.074C119.809 112.745 114.4 118.506 107.969 122.978L130.803 155.82C141.83 148.154 151.101 138.275 158.047 126.844L123.861 106.074ZM107.968 122.979C100.408 128.236 91.667 131.547 82.5206 132.619L87.1774 172.347C102.857 170.509 117.842 164.832 130.804 155.819L107.968 122.979ZM82.5207 132.619C73.3729 133.691 64.1035 132.491 55.5327 129.125L40.9103 166.357C55.6065 172.129 71.4981 174.185 87.1773 172.347L82.5207 132.619ZM55.5314 129.125C46.9596 125.759 39.3497 120.331 33.3762 113.321L2.93217 139.267C13.1715 151.281 26.2164 160.587 40.9116 166.357L55.5314 129.125ZM33.3769 113.322C27.4036 106.312 23.2514 97.9382 21.2878 88.9405L-17.7924 97.4691C-14.4262 112.894 -7.30802 127.25 2.9315 139.266L33.3769 113.322ZM21.2878 88.9404C19.3242 79.943 19.6098 70.6 22.1195 61.7393L-16.3667 50.8389C-20.6688 66.0286 -21.1586 82.045 -17.7924 97.4693L21.2878 88.9404ZM22.1195 61.7393C24.629 52.8787 29.2852 44.7736 35.6755 38.1422L6.87214 10.3866C-4.08241 21.7547 -12.0644 35.6491 -16.3667 50.8389L22.1195 61.7393ZM35.6754 38.1422C41.1108 32.5017 47.6581 28.0753 54.885 25.1333L39.8032 -11.9145C27.4139 -6.87092 16.19 0.717092 6.87221 10.3866L35.6754 38.1422ZM54.8856 25.1331C46.0684 28.7228 37.6082 23.3369 35.2889 16.1718L73.3449 3.85355C69.1239 -9.18692 54.3394 -17.8326 39.8026 -11.9143L54.8856 25.1331ZM35.289 16.172C32.7168 8.22583 37.3188 1.26155 43.0251 -1.14621L58.5754 35.7074C69.9714 30.8988 77.8188 17.6748 73.3448 3.85336L35.289 16.172ZM43.0246 -1.14602C32.4722 3.30683 22.9063 9.86157 14.9238 18.1455L43.7272 45.9009C47.9451 41.5238 52.9998 38.0602 58.5758 35.7072L43.0246 -1.14602ZM14.9239 18.1454C5.24522 28.1894 -1.80713 40.4653 -5.60826 53.886L32.8779 64.7864C34.8863 57.6951 38.6128 51.2084 43.7271 45.901L14.9239 18.1454ZM-5.60826 53.886C-9.40932 67.3064 -9.84209 81.4574 -6.86784 95.0853L32.2122 86.5561C30.6407 79.3554 30.8693 71.8779 32.8779 64.7864L-5.60826 53.886ZM-6.86788 95.0851C-3.8938 108.713 2.39527 121.397 11.4424 132.013L41.8872 106.069C37.1069 100.459 33.7838 93.7572 32.2123 86.5563L-6.86788 95.0851ZM11.4417 132.012C20.4896 142.631 32.0154 150.851 44.9968 155.95L59.62 118.718C52.7576 116.023 46.6676 111.679 41.8879 106.07L11.4417 132.012ZM44.9984 155.95C57.9817 161.048 72.0219 162.866 85.8754 161.242L81.2184 121.514C73.898 122.372 66.4789 121.412 59.6184 118.718L44.9984 155.95ZM85.8772 161.242C99.7289 159.617 112.968 154.603 124.421 146.638L101.585 113.798C95.5343 118.005 88.5391 120.655 81.2166 121.514L85.8772 161.242ZM124.419 146.64C133.865 140.073 141.855 131.668 147.926 121.953L114.006 100.755C110.799 105.886 106.577 110.327 101.587 113.796L124.419 146.64ZM147.927 121.953C144.645 127.205 137.037 130.647 129.597 126.844L147.801 91.2262C134.863 84.6135 120.559 90.2669 114.005 100.755L147.927 121.953Z'
							fill='url(#paint1_linear_2117_120886)'
							mask='url(#path-4-inside-1_2117_120886)'
							className='eboqmdWA_4'
						></path>
					</g>
					<mask
						id='mask2_2117_120886'
						masktype='luminance'
						maskUnits='userSpaceOnUse'
						x='52'
						y='0'
						width='75'
						height='29'
					>
						<path
							d='M53.5407 10.0005C52.604 7.20611 54.1066 4.16197 56.9599 3.4236C68.415 0.459229 80.43 0.204539 92.0437 2.71281C103.658 5.22111 114.497 10.4116 123.708 17.8393C126.002 19.6893 126.114 23.0823 124.108 25.241L123.613 25.7736C121.606 27.9324 118.242 28.0363 115.925 26.2148C108.233 20.1673 99.2467 15.9313 89.6367 13.8559C80.0274 11.7804 70.0945 11.9305 60.592 14.2643C57.7298 14.9673 54.7085 13.4843 53.7718 10.6899L53.5407 10.0005Z'
							fill='#D5DCFF'
							stroke='#748BFF'
							strokeOpacity='0.5'
							strokeWidth='1.68889'
							className='eboqmdWA_5'
						></path>
					</mask>
					<g mask='url(#mask2_2117_120886)'>
						<path
							d='M53.5407 10.0005C52.604 7.20611 54.1066 4.16197 56.9599 3.4236C68.415 0.459229 80.43 0.204539 92.0437 2.71281C103.658 5.22111 114.497 10.4116 123.708 17.8393C126.002 19.6893 126.114 23.0823 124.108 25.241L123.613 25.7736C121.606 27.9324 118.242 28.0363 115.925 26.2148C108.233 20.1673 99.2467 15.9313 89.6367 13.8559C80.0274 11.7804 70.0945 11.9305 60.592 14.2643C57.7298 14.9673 54.7085 13.4843 53.7718 10.6899L53.5407 10.0005Z'
							fill='#D5DCFF'
							stroke='#748BFF'
							strokeOpacity='0.5'
							strokeWidth='1.68889'
							className='eboqmdWA_6'
						></path>
					</g>
					<defs>
						<linearGradient
							id='paint0_linear_2117_120886'
							x1='8.17907'
							y1='139.829'
							x2='148.336'
							y2='1.14696'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#7AAFFF'></stop>
							<stop offset='1' stopColor='#642DFF'></stop>
						</linearGradient>
						<linearGradient
							id='paint1_linear_2117_120886'
							x1='8.2194'
							y1='139.85'
							x2='148.163'
							y2='0.477087'
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
