import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
import { Stack } from "@mui/system";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { getDominantReaction } from "../api";
import { sumObjectsByKey } from "../helpers";
const labels = ["06-29", "06-30", "07-01", "07-02", "07-03", "07-04", "07-05"];

function Chart() {
  const [reaction, setReaction] = useState({});
  useEffect(() => {
    let items: any = [];
    labels.forEach(async (i) => {
      const item = await getDominantReaction(`${i}.json`);
      items.push(Object.values(item));
      setReaction((s) => ({ ...s, [`${i}.json` as keyof typeof s]: item }));
    });

    // setDataset(arraysItemssum(items));
  }, []);

  const data = useMemo(() => {
    // sum all reaction (sum all likes, all haha, all care ...)
    const data = sumObjectsByKey(Object.values(reaction));

    return {
      labels: [
        "06-29 like ",
        "06-30 love",
        "07-01 care",
        "07-02 wow",
        "07-03 sad ",
        "07-04 haha",
        "07-05 angry",
      ],
      datasets: [
        {
          label: "year 2021",
          data: Object.values(data),
          fill: false,
        },
      ],
    };
  }, [reaction]);

  return (
    <ChartWrapper>
      <Line data={data} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled(Stack)(() => ({
  padding: "60px",
  width: 700,
}));

export default Chart;
