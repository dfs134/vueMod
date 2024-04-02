import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/main/Main.vue";
import NewAudio from "@/views/NewAudio.vue";
import ImgFull from "@/views/ImgFull.vue";

import Standard from "@/views/thumb_standard/Standard.vue";
import StandardText from "@/views/thumb_standard/StandardText.vue";
import Big from "@/views/thumb_big/Big.vue";
import BigText from "@/views/thumb_big/BigText.vue";
import Small from "@/views/thumb_small/Small.vue";
import SmallText from "@/views/thumb_small/SmallText.vue";
import ListStandard from "@/views/simple_list/ListStandard.vue";
import ListBig from "@/views/simple_list/ListBig.vue";
import ListSmall from "@/views/simple_list/ListSmall.vue";
import ListComplexStandard from "@/views/complex_list/ListStandard.vue";
import ListComplexNarrow from "@/views/complex_list/ListNarrow.vue";
import DoctorCard from "@/views/doctor/DoctorCard.vue";
import NurseCall from "@/views/nurse/NurseCall.vue";
import MealInfo from "@/views/meal/MealInfo.vue";
import DietGuide from "@/views/meal/DietGuide.vue";
import MealSatisfaction from "@/views/survey/MealSatisfaction.vue";
import PatientInfo from "@/views/patient/PatientInfo.vue";
import MedicineGuide from "@/views/patient/MedicineGuide.vue";
import TestResults from "@/views/patient/TestResults.vue";
import MediumCostInfo from "@/views/patient/MediumCostInfo.vue";
import Login from "@/views/login/Login.vue";
import UseMethod from "@/views/remote_control/UseMethod.vue"
// dm09
import hospitalLife from "@/views/dm09/hospital/hospitalLife.vue";
import MedicalStaffIntro from "@/views/dm09/hospital/child_second/MedicalStaffIntro.vue";
import RightsAndDuties from "@/views/dm09/hospital/child/RightsAndDuties.vue";
import MedicalIntorduction from "@/views/dm09/hospital/child/MedicalIntorduction.vue";
import DischargeInfo from "@/views/dm09/hospital/child/DischargeInfo.vue";
import FloorGuide from "@/views/dm09/hospital/child/FloorGuide.vue";
import HealthCheckInfo from "@/views/dm09/hospital/child/HealthCheckInfo.vue";
import HospitalIntroVidio from "@/views/dm09/hospital/child/HospitalIntroVidio.vue";
import HospitalLifeGuide from "@/views/dm09/hospital/child/HospitalLifeGuide.vue";
import SafetyMgmtInfo from "@/views/dm09/hospital/child/SafetyMgmtInfo.vue";
import LocationPark from "@/views/dm09/hospital/child/LocationPark.vue";
import Imghospital from "@/views/dm09/hospital/child_second/ImgFull.vue";
import MyMenu from "@/views/dm09/my_menu/MyMenu.vue";
import PatientInfomation from "@/views/dm09/my_menu/child/PatientInfomation.vue";
import MedicineGrideInfo from "@/views/dm09/my_menu/child/MedicineGrideInfo.vue";
import TestResultsInfo from "@/views/dm09/my_menu/child/TestResultsInfo.vue";
import MediumCost from "@/views/dm09/my_menu/child/MediumCost.vue";
import MyImgFull from "@/views/dm09/my_menu/child/MyImgFull.vue";
import CallNurse from "@/views/dm09/nurse/CallNurse.vue";
import EducationInfo from "@/views/dm09/education/EducationInfo.vue";
import EducationViedo from "@/views/dm09/education/EducationViedo.vue";
import KyMealInfo from "@/views/dm09/meal/KyMealInfo.vue";
import KyDietGuide from "@/views/dm09/meal/child/KyDietGuide.vue";
import KyMealSatisfaction from "@/views/dm09/meal/child/KyMealSatisfaction.vue";
import KyMealImgFull from "@/views/dm09/meal/child/KyMealImgFull.vue";
import CU from "@/views/dm09/external_service/CU.vue";
import OrderPage from "@/views/dm09/external_service/OrderPage.vue";
import OrderList from "@/views/dm09/external_service/OrderList.vue";
import CleaningRequest from "@/views/dm09/external_service/CleaningRequest.vue";
import Pacs from "@/views/dm09/external_service/child/Pacs.vue";
import PacsList from "@/views/dm09/external_service/PacsList.vue";
import Boot from "@/views/system/boot.vue";

const routes = [
  {
    path: "/new/s3/system/boot.htm",
    name: "Boot",
    component: Boot,
  },
  {
    path: "/",
    name: "/",
    redirect: "/Main"
  },
  {
    path: "/remote_control/UseMethod",
    name: "UseMethod",
    component: UseMethod
  },
  {
    path: "/Main",
    name: "Main",
    component: Main
  },
  {
    path: "/NewAudio",
    name: "NewAudio",
    component: NewAudio
  },
  {
    path: "/ImgFull",
    name: "ImgFull",
    component: ImgFull
  },
  {
    path: "/thumb_standard/Standard",
    name: "Standard",
    component: Standard
  },
  {
    path: "/thumb_standard/StandardText",
    name: "StandardText",
    component: StandardText
  },
  {
    path: "/thumb_big/Big",
    name: "Big",
    component: Big
  },
  {
    path: "/thumb_big/BigText",
    name: "BigText",
    component: BigText
  },
  {
    path: "/thumb_small/Small",
    name: "Small",
    component: Small
  },
  {
    path: "/thumb_small/SmallText",
    name: "SmallText",
    component: SmallText
  },
  {
    path: "/simple_list/ListStandard",
    name: "ListStandard",
    component: ListStandard
  },
  {
    path: "/simple_list/ListBig",
    name: "ListBig",
    component: ListBig
  },
  {
    path: "/simple_list/ListSmall",
    name: "ListSmall",
    component: ListSmall
  },
  {
    path: "/complex_list/ListComplexStandard",
    name: "ListComplexStandard",
    component: ListComplexStandard
  },
  {
    path: "/complex_list/ListComplexNarrow",
    name: "ListComplexNarrow",
    component: ListComplexNarrow
  },

  {
    path: "/doctor/doctor-card",
    name: "DoctorCard",
    component: DoctorCard
  },
  {
    path: "/nurse/nurse-call",
    name: "NurseCall",
    component: NurseCall
  },
  {
    path: "/meal/meal-info",
    name: "MealInfo",
    component: MealInfo
  },
  {
    path: "/meal/diet-guide",
    name: "DietGuide",
    component: DietGuide
  },
  {
    path: "/survey/meal-satisfaction",
    name: "MealSatisfaction",
    component: MealSatisfaction
  },
  {
    path: "/patient/patient-info",
    name: "PatientInfo",
    component: PatientInfo
  },
  {
    path: "/patient/medicine-guide",
    name: "MedicineGuide",
    component: MedicineGuide
  },
  {
    path: "/patient/test-results",
    name: "TestResults",
    component: TestResults
  },
  {
    path: "/patient/medium-cost-info",
    name: "MediumCostInfo",
    component: MediumCostInfo
  },
  {
    path: "/login/login",
    name: "Login",
    component: Login
  },

  // dm09
  {
    path: "/dm09/hospital/hospitalLife",
    name: "hospitalLife",
    component: hospitalLife
  },
  {
    path: "/dm09/hospital/child_second/MedicalStaffIntro",
    name: "MedicalStaffIntro",
    component: MedicalStaffIntro
  },
  {
    path: "/dm09/hospital/child/MedicalIntorduction",
    name: "MedicalIntorduction",
    component: MedicalIntorduction
  },
  {
    path: "/dm09/hospital/child/RightsAndDuties",
    name: "RightsAndDuties",
    component: RightsAndDuties
  },
  {
    path: "/dm09/hospital/child/DischargeInfo",
    name: "DischargeInfo",
    component: DischargeInfo
  },
  {
    path: "/dm09/hospital/child/FloorGuide",
    name: "FloorGuide",
    component: FloorGuide
  },
  {
    path: "/dm09/hospital/child/HealthCheckInfo",
    name: "HealthCheckInfo",
    component: HealthCheckInfo
  },
  {
    path: "/dm09/hospital/child/HospitalIntroVidio",
    name: "HospitalIntroVidio",
    component: HospitalIntroVidio
  },
  {
    path: "/dm09/hospital/child/HospitalLifeGuide",
    name: "HospitalLifeGuide",
    component: HospitalLifeGuide
  },
  {
    path: "/dm09/hospital/child/SafetyMgmtInfo",
    name: "SafetyMgmtInfo",
    component: SafetyMgmtInfo
  },
  {
    path: "/dm09/hospital/child/LocationPark",
    name: "LocationPark",
    component: LocationPark
  },
  {
    path: "/dm09/hospital/child_second/Imghospital",
    name: "Imghospital",
    component: Imghospital
  },
  {
    path: "/dm09/my_menu/MyMenu",
    name: "MyMenu",
    component: MyMenu
  },
  {
    path: "/dm09/my_menu/MyMenu/child/PatientInfomation",
    name: "PatientInfomation",
    component: PatientInfomation
  },
  {
    path: "/dm09/my_menu/MyMenu/child/MedicineGrideInfo",
    name: "MedicineGrideInfo",
    component: MedicineGrideInfo
  },
  {
    path: "/dm09/my_menu/MyMenu/child/TestResultsInfo",
    name: "TestResultsInfo",
    component: TestResultsInfo
  },
  {
    path: "/dm09/my_menu/MyMenu/child/MediumCost",
    name: "MediumCost",
    component: MediumCost
  },
  {
    path: "/dm09/my_menu/MyMenu/child/MyImgFull",
    name: "MyImgFull",
    component: MyImgFull
  },
  {
    path: "/dm09/hospital/nurse/CallNurse",
    name: "CallNurse",
    component: CallNurse
  },
  {
    path: "/dm09/education/EducationInfo",
    name: "EducationInfo",
    component: EducationInfo
  },
  {
    path: "/dm09/education/EducationViedo",
    name: "EducationViedo",
    component: EducationViedo
  },
  {
    path: "/dm09/meal/KyMealInfo",
    name: "KyMealInfo",
    component: KyMealInfo
  },
  {
    path: "/dm09/meal/child/KyDietGuide",
    name: "KyDietGuide",
    component: KyDietGuide
  },
  {
    path: "/dm09/meal/child/KyMealSatisfaction",
    name: "KyMealSatisfaction",
    component: KyMealSatisfaction
  },
  {
    path: "/dm09/meal/child/KyMealImgFull",
    name: "KyMealImgFull",
    component: KyMealImgFull
  },
  {
    path: "/dm09/external_service/CU",
    name: "CU",
    component: CU
  },
  {
    path: "/dm09/external_service/OrderPage",
    name: "OrderPage",
    component: OrderPage
  },
  {
    path: "/dm09/external_service/OrderList",
    name: "OrderList",
    component: OrderList
  },
  {
    path: "/dm09/external_service/child/Pacs",
    name: "Pacs",
    component: Pacs
  },
  {
    path: "/dm09/external_service/PacsList",
    name: "PacsList",
    component: PacsList
  },
  {
    path: "/dm09/external_service/CleaningRequest",
    name: "CleaningRequest",
    component: CleaningRequest
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
});

export default router;
