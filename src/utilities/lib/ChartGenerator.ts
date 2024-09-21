import * as d3 from "d3"
import { ChartData, ChartOptions, TChartType } from "../types/components/app/Chart";



export class ChartGenerator {
  private svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
  private options: ChartOptions;
  private radius: number 
  constructor(selector: HTMLElement, options: ChartOptions) {
    this.options = options;

    // Set up the SVG element
    this.svg = d3.select(selector)
      .append('svg')
      .attr('width', options.width)
      .attr('height', options.height)
      .append('g')
      .attr('transform', `translate(${Math.abs((options.margin?.left ?? 0) - (options.margin?.right ?? 0))}, ${Math.abs((options.margin?.top ?? 0) - (options.margin?.bottom ?? 0))})`)
      
    // Initiate the Radius
    this.radius = Math.min(this.options.width, this.options.height) / 2
  }
  generateChart(type: TChartType, data: ChartData[]): any {
    switch (type) {
      case 'bar':
        this.generateBarChart(data);
        break;
      case 'line':
        this.generateLineChart(data);
        break;
      case 'pie':
        this.generatePieChart(data);
        break;
      case 'area':
        this.generateAreaChart(data);
        break;
      case 'scatter':
        this.generateScatterPlot(data);
        break;
      case 'stackedBar':
        this.generateStackedBarChart(data);
        break;
      case 'groupedBar':
        this.generateGroupedBarChart(data);
        break;
      case 'radial':
        this.generateRadialChart(data);
        break;
      case 'redial-areas':
        this.generateRadialAreasChart(data);
        break;
      case 'redial-lines':
        this.generateRadialLinesChart(data);
        break;
      case 'groupedRadial':
        this.generateGroupedRadialChart(data);
        break;
      default:
        console.error('Unsupported chart type');
    }
  }

  private generateBarChart(data: ChartData[]): void {
    const x = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([ ((this.options.barChartLeftSpace?? 0)) || 0 , this.options.width- ((this.options.barChartRightSpace?? 0) + (this.options.margin?.right?? 0))])
      .padding(this.options.barChartPaddingBetweenBars ?? 0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([this.options.height - (this.options.barChartBottomSpace ?? 0) , this.options.barChartTopSpace ?? 0]);

    this.svg
      .append('g')
      .attr('transform', `translate(0,${this.options.height  - (this.options.barChartBottomSpace ?? 0)})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    this.svg
      .append('g')
      .attr('transform', `translate(${this.options.barChartLeftSpace},0)`)
      .call(d3.axisLeft(y).tickFormat((d) => `${d}K`)); // format y axis labels

    // Add Y axis label
    this.svg
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', `-${((this.options.margin?.left ?? 0) + (this.options.barChartLeftSpace ?? 0))/2}`)
      .attr('y', `${((this.options.margin?.top ?? 0)/2)}`)
      .attr('transform', 'rotate(-90)')
      .text('Y-axis title');

   // Add X axis label
    this.svg
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', this.options.width / 2 + (this?.options?.margin?.left ?? 0))
      .attr('y', this.options.height -5 )
      .text('X-axis title');

     this.svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.label) as number)
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => this.options.height - (this.options.barChartBottomSpace ?? 0) - y(d.value))
      .attr('fill', (d, i) => d.color || "steelblue");
  }

  private generateLineChart(data: ChartData[]): void {
    const x = d3.scalePoint()
      .domain(data.map(d => d.label))
      .range([0, this.options.width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([this.options.height, 0]);

    const line = d3.line<ChartData>()
      .x(d => x(d.label) as number)
      .y(d => y(d.value));
     this.svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 1.5)
      .attr('d', line);
  }

  private generatePieChart(data: ChartData[]): void {
    const radius = Math.min(this.options.width, this.options.height) / 2;
    const arc = d3.arc<d3.PieArcDatum<ChartData>>()
      .innerRadius(0)
      .outerRadius(radius);

    const pie = d3.pie<ChartData>()
      .value(d => d.value);

    const pieData = pie(data);

    this.svg.attr('transform', `translate(${this.options.width / 2}, ${this.options.height / 2})`);

     this.svg.selectAll('path')
      .data(pieData)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => d3.schemeCategory10[i % 10]);
  }

  private generateAreaChart(data: ChartData[]): void {
    const x = d3.scalePoint()
      .domain(data.map(d => d.label))
      .range([0, this.options.width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([this.options.height, 0]);

    const area = d3.area<ChartData>()
      .x(d => x(d.label) as number)
      .y0(this.options.height)
      .y1(d => y(d.value));

     this.svg.append('path')
      .datum(data)
      .attr('fill', 'steelblue')
      .attr('d', area);
  }

  private generateScatterPlot(data: ChartData[]): void {
    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([0, this.options.width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([this.options.height, 0]);

     this.svg.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.value))
      .attr('cy', d => y(d.value))
      .attr('r', 5)
      .attr('fill', 'steelblue');
  }

  private generateStackedBarChart(data: ChartData[]): void {
    const groups = data.map(d => d.group) as string[];
    const stackedData = d3.stack<ChartData>()
      .keys(groups)
      .value((d, key) => d.value)(data);

    const x = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, this.options.width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(stackedData, d => d3.max(d, e => +e[1])) as number])
      .range([this.options.height, 0]);

    const color = d3.scaleOrdinal()
      .domain(groups)
      .range(d3.schemeCategory10);

     this.svg.selectAll('g')
      .data(stackedData)
      .enter()
      .append('g')
      .attr('fill', d => color(d.key as string) as string)
      .selectAll('rect')
      .data(d => d)
      .enter()
      .append('rect')
      .attr('x', d => x(d.data.label) as number)
      .attr('y', d => y(d[1]))
      .attr('height', d => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth());
  }

  private generateGroupedBarChart(data: ChartData[]): void {
    const groups = Array.from(new Set(data.map(d => d.group)));
    const x0 = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([((this.options.barChartLeftSpace?? 0)) || 0 , this.options.width- ((this.options.barChartRightSpace?? 0) + (this.options.margin?.right?? 0))])
      .padding(this.options.barChartPaddingBetweenBars ?? 0.1);

    const x1 = d3.scaleBand()
      .domain(groups as string[])
      .range([0, x0.bandwidth()]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([this.options.height - (this.options.barChartBottomSpace ?? 0) , this.options.barChartTopSpace ?? 0]);

    const color = d3.scaleOrdinal()
      .domain(groups as string[])
      .range(d3.schemeCategory10);

     this.svg.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${x0(d.label)},0)`)
      .selectAll('rect')
      .data(d => groups.map(group => ({ group, value: d.value,color:d.color })))
      .enter()
      .append('rect')
      .attr('x', d => x1(d.group as string) as number)
      .attr('y', d => y(d.value))
      .attr('width', x1.bandwidth())
      .attr('height', d => this.options.height - (this.options.barChartBottomSpace ?? 0) - y(d.value))
      .attr('fill', d => d.color || color(d.group as string) as string);
  }

  private generateRadialChart(data: ChartData[]): void {
    const arc = d3.arc<d3.PieArcDatum<ChartData>>()
      .innerRadius(this.options.radialChartouterRadius || 50)
      .outerRadius(this.radius)
     const wholePercentage = data[0].value/(data.reduce((prev,current) => prev + current.value,0))

    const pie = d3.pie<ChartData>()
      .value(d => d.value)
      .startAngle(-Math.PI/2)
      .endAngle(((this.options.radialChartFullDegree||360)/360)*2*(Math.PI)-Math.PI/2)

    const pieData = pie(data);

    this.svg.attr('transform', `translate(${this.options.width / 2}, ${this.options.height / 2})`);

     this.svg.selectAll('path')
      .data(pieData)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => d.data.color || d3.schemeCategory10[i % 10]);

    this.svg
    .append('text')
    .attr('y', 0) // Position the title at the top
    .attr('text-anchor', 'middle')
    .text(`${Math.floor(wholePercentage*100)}%`)
    .attr('fill', '#000')
    .style('font-size', '32px')
    .style('font-weight', 'bold');

    (this.options.radialChartFullDegree && this.options.radialChartFullDegree < 180) && this.svg
    .append('text')
    .attr('y', 0) // Position the title at the top
    .attr('x', -this.options.width/2 + 10) // Position the title at the top
    .attr('text-anchor', 'middle')
    .text(`0`)
    .attr('fill', '#000')
    .style('font-size', '10px')
    .style('font-weight', 'bold');
    
    (this.options.radialChartFullDegree && this.options.radialChartFullDegree < 180) && this.svg
    .append('text')
    .attr('y', 0) // Position the title at the top
    .attr('x', +this.options.width/2 - 9) // Position the title at the top
    .attr('text-anchor', 'middle')
    .text(`100`)
    .attr('fill', '#000')
    .style('font-size', '10px')
    .style('font-weight', 'bold');

    this.options.showLabelOrNot && this.svg
      .selectAll('.text')
      .data(pieData)
      .enter()
      .append('text')
      .attr('transform', (d) => `translate(40,-18)`)
      .attr('x', (d,i) => `-${i*60}px`)
      .attr('y', (d,i) => `5.8em`)
      .attr('text-anchor', 'middle')
      .text((d) => d.data.label)
      .style('font-size', '12px');

    this.options.showLabelOrNot &&  this.svg
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
      .attr("width","12")
      .text((d) => d.label)
      .attr("height","12")
      .attr('transform', (d) => `translate(10,-24)`)
      .attr('x', (d,i) => `-${i*60}px`)
      .attr('y', `4em`)
      .attr('text-anchor', 'middle')
      .attr('fill', (d, i) => d.color || d3.schemeCategory10[i % 10])
  }

  private generateRadialAreasChart(data: ChartData[]): void {
    this.svg.attr('transform', `translate(${this.options.width / 2}, ${this.options.height / 2})`);
    const angleScale = d3.scaleLinear().domain([0,data.length]).range([0,2*Math.PI]) 
    const radiusScale = d3.scaleLinear().domain([0,d3.max(data,d => d.value)!]).range([0,this.radius])
    // const radialLineGenerator = d3.lineRadial<number>().angle((_,i) => angleScale(i)).radius(d => radiusScale(d))
    const radialLineGenerator = d3.areaRadial<ChartData>().angle((_,i) => angleScale(i)).innerRadius(0).outerRadius(d => radiusScale(d.value))
    const radialAreaData = data.map((data) => data.value)
    this.svg.append('path')
    .datum(data)
    .attr('fill',"lightblue")
    .attr('d',radialLineGenerator)

     this.svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('transform',(d,i) => {
        const angle = angleScale(i) - Math.PI/2;
        const r = radiusScale(d.value) + 10 ;
        return `translate(${r*Math.cos(angle)}, ${r*Math.sin(angle)})`
      })
      .attr('text-anchor', 'middle')
      .attr("alignment-baseline",'middle')
      .text(d => d.label)
      .style("font-size",'10px')
      .attr("stroke","steelblue")

      
  }

  private generateGroupedRadialChart(data: ChartData[]) : void {
    const colors = ['#60a5fa', '#1e3a8a', '#1d4ed8', '#3b82f6', '#d1d1d1' , "#2563eb","#1d4ed8","#555555"];
    const emptyColor = "#F5F5F5"

   const radius = Math.min(this.options.width, this.options.height) / 2;

    // Create the SVG container
    this.svg
      .attr('transform', `translate(${this.options.width / 2}, ${this.options.height / 2})`);

    // Create a pie chart layout
    const pie = d3
      .pie<ChartData>()
      .value((d) => d.value)
      .sort(null);

    // Create an arc generator for the pie slices
    const arc = d3
      .arc<d3.PieArcDatum<ChartData>>()
      .innerRadius((d, i) => (i) * (radius / data.length))
      .outerRadius((d, i) => (i + 1) * (radius / data.length))
      .startAngle(0)
      .endAngle(d =>-(d.data.angle!/270)*(Math.PI)*3/2)

    const reverseArc = d3
      .arc<d3.PieArcDatum<ChartData>>()
      .innerRadius((d, i) => i * (radius / data.length))
      .outerRadius((d, i) => (i + 1) * (radius / data.length))
      .startAngle(Math.PI/2)
      .endAngle(d => +(270- d.data.angle!)/180*(Math.PI)+Math.PI/2)

    // Bind the data and create the pie slices
    

    this.svg
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colors[i % colors.length])
      .attr('transform', (d) => `rotate(${Math.PI/4})`)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);
      this.svg
      .selectAll('.path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', reverseArc)
      .attr('fill', (d, i) => emptyColor)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);
    
    // Add labels to the chart
    this.svg
      .selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('transform', (d) => `translate(0,-18)`)
      .attr('dy', (d,i) => `-${i*1.5}em`)
      .attr('dx', (d,i) => `6em`)
      .attr('text-anchor', 'middle')
      .text((d) => d.data.label)
      .attr('fill', (d, i) => colors[i % colors.length])
      .style('font-size', '8px');
    this.svg
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
      .attr("width","8")
      .text((d) => d.label)
      .attr("height","8")
      .attr('transform', (d) => `translate(10,-24)`)
      .attr('y', (d,i) => `-${i*12}px`)
      .attr('x', `1em`)
      .attr('text-anchor', 'middle')
      .attr('fill', (d, i) => colors[i % colors.length])
  }

  private generateRadialLinesChart(data: ChartData[]): void {
    this.svg.attr('transform', `translate(${this.options.width / 2}, ${this.options.height / 2})`);
    const angleScale = d3.scaleLinear().domain([0,d3.max(data ,d => d.value) as number]).range([0,2*Math.PI]) 
    const radiusScale = d3.scaleLinear().domain([0,d3.max(data,d => d.value) as number]).range([0,this.radius])

  }

}

