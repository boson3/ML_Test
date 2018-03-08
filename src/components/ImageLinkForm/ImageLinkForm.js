import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div> 
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a shot'}
				</p>
				<div className='center'>
					<div className='form center w-70 pa3 br4 shadow-5'>
					<input className='f4 pa1 w-100 center' type='text' onChange={onInputChange}/>
					<button className='f4 w-30 grow link ph3 pv2 dib white bg-blue'
							onClick={onButtonSubmit}
					>Detect</button>
					</div>
				</div>
		</div>
	);
}

export default ImageLinkForm;