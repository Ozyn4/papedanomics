'use client'
import {  Container, Grid, GridCol, Image, Paper, Space, Spoiler, Text, Title } from '@mantine/core';

import classes from './IntroRFM.module.css';
import ScatterPlot from '@/components/ScatterPlot/ScatterPlot';
export function IntroRFM() {
  const scatterData1 = [
    { x: 20, y: 19 },
    { x: 17, y: 20 },
    { x: 12, y: 18 },
    { x: 12, y: 17 },
    { x: 12, y: 15 },
    { x: 12, y: 13 },
    { x: 18, y: 9 },
    { x: 18, y: 10 },
    { x: 1, y: 16 },
    { x: 1, y: 14 },
    { x: 12, y: 8 },
    { x: 1, y: 11 },
    { x: 1, y: 12 },
    { x: 10, y: 3 },
    { x: 1, y: 6 },
    { x: 1, y: 7 },
    { x: 1, y: 5 },
    { x: 10, y: 1 },
    { x: 1, y: 4 },
    { x: 1, y: 2 },
  ];
  
  const scatterData2 = [
    { x: 20, y: 19 },
    { x: 17, y: 20 },
    { x: 12, y: 18 },
    { x: 12, y: 17 },
    { x: 12, y: 13 },
    { x: 12, y: 15 },
    { x: 18, y: 10 },
    { x: 18, y: 8 },
    { x: 1, y: 16 },
    { x: 1, y: 14 },
    { x: 12, y: 9 },
    { x: 1, y: 12 },
    { x: 1, y: 11 },
    { x: 10, y:  3},
    { x: 1, y: 6 },
    { x: 1, y: 5 },
    { x: 1, y: 7 },
    { x: 10, y: 2 },
    { x: 1, y: 4 },
    { x: 1, y: 1 },
  ];
  
  const scatterData3 = [
    { x: 19, y: 19 },
    { x: 20, y: 20 },
    { x: 18, y: 18 },
    { x: 17, y: 17 },
    { x: 15, y: 13 },
    { x: 13, y: 15 },
    { x: 9, y: 10 },
    { x: 10, y: 8 },
    { x: 16, y: 16 },
    { x: 14, y: 14 },
    { x: 8, y: 9 },
    { x: 11, y: 12 },
    { x: 12, y: 11 },
    { x: 3, y:  3},
    { x: 6, y: 6 },
    { x: 7, y: 5 },
    { x: 5, y: 7 },
    { x: 1, y: 2 },
    { x: 4, y: 4 },
    { x: 2, y: 1 },
  ];
  return (
    <div className={classes.wrapper} style={{ position: 'relative' }} id="rfm">
<Container >
<Title  className={classes.title}>Recency, Frequency, dan Monetary</Title>
<Space h="lg"/>
  <Grid>
    {/* Row for Recency, Frequency, and Monetary */}
    <GridCol span={12}>
      <Grid>
        {/* Recency Section */}
        <GridCol span={{ base: 12, sm: 4 }}>
          <Paper bg="transparent">
            <Grid>
              <GridCol span={3}>
                <Image src="recency.png" width={150} radius={25} />
              </GridCol>
              <GridCol span={9}>
                <Text size="lg" fw={700}>Recency</Text>
                <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
                  <Text size="sm">
                    Waktu yang berlalu sejak pembelian terakhir.
                  </Text>
                </Spoiler>
              </GridCol>
            </Grid>
          </Paper>
        </GridCol>

        {/* Frequency Section */}
        <GridCol span={{ base: 12, sm: 4 }}>
          <Paper bg="transparent">
            <Grid>
              <GridCol span={3}>
                <Image src="frequency.png" width={150} radius={25} />
              </GridCol>
              <GridCol span={9}>
                <Text size="lg" fw={700}>Frequency</Text>
                <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
                  <Text size="sm">
                    Tingkat frekuensi pembelian
                  </Text>
                </Spoiler>
              </GridCol>
            </Grid>
          </Paper>
        </GridCol>

        {/* Monetary Section */}
        <GridCol span={{ base: 12, sm: 4 }}>
          <Paper bg="transparent">
            <Grid>
              <GridCol span={3}>
                <Image src="monetary.png" width={150} radius={25} />
              </GridCol>
              <GridCol span={9}>
                <Text size="lg" fw={700}>Monetary</Text>
                <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
                  <Text size="sm">
                    Jumlah yang dibelanjakan.
                  </Text>
                </Spoiler>
              </GridCol>
            </Grid>
          </Paper>
        </GridCol>
      </Grid>
    </GridCol>
    <Space h="lg"/>
    {/* Row for Scatter Plots */}
    <GridCol span={12}>
      <Grid>
        <GridCol span={4}>
          <div style={{padding:10}}>
            <ScatterPlot data={scatterData1} title="Recency-Frequency Plot" xLabel='Recency' yLabel='Frequency'/>
          </div>
        </GridCol>
        <GridCol span={4}>
          <div  style={{padding:10}}>
            <ScatterPlot data={scatterData2} title="Recency-Monetary Plot" xLabel='Recency' yLabel='Monetary'/>
          </div>
        </GridCol>
        <GridCol span={4}>
          <div  style={{padding:10}}>
            <ScatterPlot data={scatterData3} title="Frequency-Monetary Plot" xLabel='Frequency' yLabel='Monetary'/>
          </div>
        </GridCol>
      </Grid>
    </GridCol>
  </Grid>
</Container>

</div>
  );
}