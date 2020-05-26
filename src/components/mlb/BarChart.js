import React, { useRef, useEffect } from "react"
import * as d3 from "d3"

const chart_width = 800
const chart_height = 400
const padding = 50

/* Component */
const BarChart = ({ data }) => {
  /* The useRef Hook creates a constiable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
  const d3Container = useRef(null)

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", chart_width)
        .attr("height", chart_height)

      const x_scale = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, d => {
            return d[0]
          }),
        ])
        .range([padding, chart_width - padding * 2])

      const y_scale = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, d => {
            return d[1]
          }),
        ])
        .range([chart_height - padding, padding])

      //   const r_scale = d3
      //     .scaleLinear()
      //     .domain([
      //       0,
      //       d3.max(data, function(d) {
      //         return d[1]
      //       }),
      //     ])
      //     .range([5, 30])

      const a_scale = d3
        .scaleSqrt()
        .domain([
          0,
          d3.max(data, d => {
            return d[1]
          }),
        ])
        .range([0, 25])
      const xAxis = d3.axisBottom(x_scale)
      const yAxis = d3.axisLeft(y_scale)

      svg
        .append("g")
        .call(xAxis)
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + (chart_height - padding) + ")")

      svg
        .append("g")
        .call(yAxis)
        .attr("class", "y-axis")
        .attr("transform", "translate(" + padding + ")")

      svg
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
          return x_scale(d[0])
        })
        .attr("cy", function(d) {
          return y_scale(d[1])
        })
        .attr("r", function(d) {
          return a_scale(d[1])
        })
        .attr("fill", "#D1AB0E")
    }
  }, [data, d3Container.current])

  return (
    <div style={{ border: "1px solid red" }}>
      <svg
        className="d3-component"
        width={800}
        height={400}
        ref={d3Container}
      />
    </div>
  )
}

export default BarChart
