'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
	isHistoricalDatePadHidden: true,
};

export default function category(state = initialState, action) {
	switch (action.type) {

		case types.SWITCH_DATE_SELECT_PAD_STATE:
			return Object.assign({}, state, {
				isHistoricalDatePadHidden: action.isHistoricalDatePadHidden,
			});

    case types.SET_SELECTOR_STATE:
      var obj = {};
      obj[action.selectorName] = action.selected;
      return Object.assign({}, state, obj);

		case types.FETCH_CURRENT_DATA:
      // devices are grouped into sections that each contains 3
			var devicesInfo = [];
			var k;
			for (var i = 0; i < action.res.length / 3; i++) {
				var rowInfo = [];
				for (var j = 0; j < 3; j++) {
					k = 3 * i + j;
					rowInfo.push(action.res[k]);
				}
				devicesInfo.push(rowInfo);
			}

			var obj = {};
			obj[action.key] = devicesInfo;
			return Object.assign({}, state, obj);

		case types.FETCH_TYPE_LIST:
			var tmp = [{DEVICENAME: '所有'}];
      return Object.assign({}, state, {
        soilTypeList: tmp.concat(action.res),
      });

    case types.FETCH_STATION_LIST:
			var tmp = [{NAME: '所有'}];
      return Object.assign({}, state, {
        soilStationList: tmp.concat(action.res),
      });

		default:
			return state;
	}
}
