// TODO: add and export your own actions
import CARS from '../index';

export const FETCH_CARS = "FETCH_CARS";

export function fetchCars(garage) {
  return {
    type: FETCH_CARS,
    payload: CARS,
  };
}
