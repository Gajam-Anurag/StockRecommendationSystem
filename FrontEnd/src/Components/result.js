import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Modal,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

function Result() {
  const location = useLocation();
  const [responseData, setResponseData] = useState([]);

  const getWeekly = async (symbol) => {
    let response = await axios.get(
      `https://cloud.iexapis.com/v1/stock/${symbol}/chart/1m?token=pk_31638584dd6c4c04a550a33b66e50c33`
    );
  };

  const COLORS = [
    '#FF8042',
    '#21618C',
    '#F4D03F',
    '#0088FE',
    '#00C49F',
    '#FFBB28',
  ];

  useEffect(() => {
    const fetchData = () => {
      setResponseData(location.state.respData);
    };
    fetchData();
  }, []);

  return (
    <>
      <Box>
        <Box>
          {responseData &&
            responseData.strategiesResponse &&
            responseData.strategiesResponse.map((item, index) => (
              <Box display="flex" flexDirection="column" marginTop={4}>
                <Typography
                  textAlign="left"
                  marginLeft="3%"
                  fontSize={20}
                  marginBottom={0.5}
                  fontWeight="bold"
                >
                  {location.state.stratergies[index]}
                </Typography>
                <Box
                  display="flex"
                  width="94%"
                  height="100%"
                  marginLeft="2%"
                  marginBottom={2}
                  borderRadius={2}
                  justifyContent="space-evenly"
                  sx={{ backgroundColor: '#E5E7E8', p: 2 }}
                >
                  {item.map((item1, index1) => (
                    <Card
                      sx={{
                        width: '30%',

                        backgroundColor:
                          item1.change < 0 ? '#FE2929' : '#69C74B',
                      }}
                    >
                      <CardActionArea onClick={() => getWeekly(item1.symbol)}>
                        <CardContent>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            marginBottom={1}
                          >
                            <Typography variant="h5">
                              {item1.companyName}
                            </Typography>
                            <Typography>{item1.symbol}</Typography>
                          </Box>
                          <Typography textAlign="left">
                            Latest Price: {item1.latestPrice}
                          </Typography>
                          <Typography textAlign="left">
                            Change: {item1.change}
                          </Typography>
                          <Typography textAlign="left">
                            Change Percent: {item1.changePercent}
                          </Typography>
                          <Typography
                            textAlign="right"
                            sx={{ fontSize: '12px' }}
                          >
                            {item1.latestTime}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Box>
              </Box>
            ))}
        </Box>
        <Typography
          textAlign="left"
          marginLeft="3%"
          fontSize={20}
          marginBottom={0.5}
          fontWeight="bold"
        >
          Pie Chart
        </Typography>
        <Box
          display="flex"
          width="94%"
          height="100%"
          marginLeft="2%"
          marginBottom={2}
          borderRadius={2}
          justifyContent="space-evenly"
          sx={{ backgroundColor: '#E5E7E8', p: 2 }}
        >
          {responseData && responseData.piechartResponse ? (
            <PieChart width={700} height={400}>
              <Tooltip formatter={(value, name) => [value, name]} />
              <Pie
                data={responseData.piechartResponse}
                dataKey="value"
                nameKey="title"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#3996E6"
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius =
                    innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#fff"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {responseData.piechartResponse[index].title}
                    </text>
                  );
                }}
              />
            </PieChart>
          ) : (
            ''
          )}
        </Box>
      </Box>
    </>
  );
}

export default Result;
