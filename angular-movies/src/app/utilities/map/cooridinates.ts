export interface coordinatesMap {
  latitude: number;
  longitude: number;
}

export interface coocoordinatesMapWithMessage extends coordinatesMap{
  message: string;
}