export interface DetailsLocal {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  daily_units: DailyUnits;
  daily: Daily;
}

export interface CurrentUnits {
  time: string;
  interval: string;
  is_day: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  cloud_cover: string;
  weather_code: string;
  surface_pressure: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
}

export interface Current {
  time: string;
  interval: number;
  is_day: number;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  cloud_cover: number;
  weather_code: number;
  surface_pressure: string;
  wind_speed_10m: number;
  wind_direction_10m: number;
}

export interface DailyUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
  rain_sum: string;
}

export interface Daily {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  rain_sum: number[];
}
