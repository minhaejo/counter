import axios from "axios";
import { API_ROOT } from "../constants";
import qs from "qs";

// axios 인스턴스를 만들 때 구성 기본 값 설정
export const instance = axios.create({
  baseURL: API_ROOT,
  timeout: 50000,
  params: {}, // do not remove this, its added to add params later in the config
});
// 인스턴스가 생성 된 후 기본값 변경
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

// 요청 인터셉터 추가
axios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // ...
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
axios.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    // ...
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error);
  }
);
