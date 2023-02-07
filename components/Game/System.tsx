import _ from "lodash";
import { Worm } from "./Renderers";

let wormIds = 0;

const distance = ([x1, y1], [x2, y2]) =>
	Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

const SpawnWorm = (state,  { touches }) => {
	touches.filter(t => t.type === "press").forEach(t => {
		if (_.size(state) < 5) {
			state[++wormIds] = {
				position: [t.event.pageX, t.event.pageY],
				renderer: Worm
			};
		}
	});

	return state;
};

const AssignFingerToWorm = (state, { touches }) => {
	let allWorms = Object.keys(state).map(key => ({
		id: key,
		components: state[key]
	}));

	touches.filter(x => x.type === "start").forEach(t => {
		let touchOrigin = [t.event.pageX, t.event.pageY];
		let closestWorm = _.minBy(
			allWorms
				.filter(w => !w.components.touchId)
				.map(w =>
					Object.assign(w, {
						distance: distance(touchOrigin, w.components.position)
					})
				),
			"distance"
		);
		if (closestWorm) closestWorm.components.touchId = t.id;
	});

	return state;
};

const MoveWorm = (state, { touches }) => {
	touches.filter(t => t.type === "move").forEach(t => {
		let wormId = Object.keys(state).find(
			key => state[key].touchId === t.id
		);
		let worm = state[wormId];
		if (worm) {
			worm.position = [
				worm.position[0] + t.delta.pageX,
				worm.position[1] + t.delta.pageY
			];
		}
	});

	return state;
};

const ReleaseFingerFromWorm = (state, { touches }) => {
	touches.filter(t => t.type === "end").forEach(t => {
		Object.keys(state)
			.filter(key => state[key].touchId === t.id)
			.forEach(key => delete state[key]["touchId"]);
	});

	return state;
};

const RemoveWorm = (state, { touches }) => {
	touches.filter(t => t.type === "long-press").forEach(t => {
		let touchOrigin = [t.event.pageX, t.event.pageY];
		let closestWorm = _.sortBy(
			Object.keys(state)
				.map(key => ({
					id: key,
					distance: distance(state[key].position, touchOrigin)
				}))
				.filter(x => x.distance < 60),
			["distance"]
		)[0];

		if (closestWorm) delete state[closestWorm.id];
	});

	return state;
};

export {
	SpawnWorm,
	AssignFingerToWorm,
	MoveWorm,
	ReleaseFingerFromWorm,
	RemoveWorm
};