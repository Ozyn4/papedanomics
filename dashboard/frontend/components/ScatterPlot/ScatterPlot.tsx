import Plot from 'react-plotly.js';

interface ScatterPlotProps {
  data: { x: number; y: number }[];
  title: string;
  xLabel: string;
  yLabel: string;
}

const ScatterPlot = ({ data, title, xLabel, yLabel }: ScatterPlotProps) => {
  return (
    <Plot
      data={[
        {
          x: data.map((d) => d.x),
          y: data.map((d) => d.y),
          mode: 'markers',
          type: 'scatter',
          marker: { color: 'red' },
        }
      ]}
      layout={{
        width: 300,
        height: 200,
        title: title,
        xaxis: {
          title: xLabel
        },
        yaxis: {
          title: yLabel
        },
        margin: {
          l: 50, // left margin
          r: 20, // right margin
          b: 50, // bottom margin
          t: 40  // top margin
        }
      }}
    />
  );
};

export default ScatterPlot;
