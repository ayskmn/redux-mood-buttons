const store = Redux.createStore(moodReducer);

const face = document.getElementById('face');

document.getElementById('btn-happy').addEventListener('click', () => {
	store.dispatch({ type: 'MOOD_HAPPY', payload: 'ʘ‿ʘ'})
});

document.getElementById('btn-sad').addEventListener('click', () => {
	store.dispatch({type: 'MOOD_SAD', payload: '⊙︿⊙'})
});

document.getElementById('btn-angry').addEventListener('click', () => {
	store.dispatch({type: 'MOOD_ANGRY', payload: 'ಠ▃ಠ'})
});

document.getElementById('btn-confused').addEventListener('click', () => {
	store.dispatch({type: 'MOOD_CONFUSED', payload: '◔_◔'})
});

function renderFace() {
	face.innerHTML = store.getState().face;
}

renderFace();
store.subscribe(renderFace)