import React from "react";
import { RadarData, RadarOptions } from "@/components/RadarChart/RadarConfig";
import { Radar } from "react-chartjs-2";

export class RadarChart extends React.Component {
  chartRef: any;
  constructor(props: any) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.chartRef);
  }

  render() {
    return (
      <Radar ref={this.chartRef} data={RadarData} />
    );
  }
}
