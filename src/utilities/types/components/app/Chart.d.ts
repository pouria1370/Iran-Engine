export type TActions = "setting" | "maximize" | "zoom" | "more"
export type TChartType = 'bar' | 'line' | 'pie' | 'area' | 'scatter' | 'stackedBar' | 'groupedBar' | 'radial' | 'redial-areas' | 'redial-lines' | "groupedRadial";

export interface ChartOptions {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  radialChartFullDegree?:number;
  radialChartouterRadius?:number;
  showLabelOrNot?:boolean = false;
  barChartLeftSpace?:number;
  barChartRightSpace?:number;
  barChartTopSpace?:number;
  barChartBottomSpace?:number;
  barChartPaddingBetweenBars?:number;
  
}

export interface ChartData {
  label: string;
  value: number;
  group?: string;
  angle?:number;
  color?:string;
}