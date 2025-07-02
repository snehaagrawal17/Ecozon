import '../Css/Dashboard.css';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import {
  FaBoxOpen,
  FaChartLine,
  FaChartPie,
  FaGlobeAmericas,
  FaInfoCircle,
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaShoppingCart,
  FaTrashAlt,
  FaTree,
  FaTrophy,
  FaWater
} from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

import { useReturnBox } from '../context/ReturnContext';

const AnimatedNumber = ({ n }) => {
  
  return <span>{n}</span>;
};

const monthlyPurchaseData = [
  { month: 'Jan', purchases: 25, carbonSaved: 12 }, 
  { month: 'Feb', purchases: 30, carbonSaved: 15 },
  { month: 'Mar', purchases: 45, carbonSaved: 22 }, 
  { month: 'Apr', purchases: 38, carbonSaved: 19 },
  { month: 'May', purchases: 52, carbonSaved: 26 },
];

const productCategoryData = [
  { name: 'Eco-Fashion', value: 35, color: '#8BC34A' },
  { name: 'Sustainable Home', value: 25, color: '#FF9800' },
  { name: 'Organic Food', value: 20, color: '#A1887F' },
  { name: 'Zero Waste', value: 20, color: '#00BCD4' },
];

const sustainabilityImpactData = [
  { name: 'Plastic Reduction', value: 78, fill: '#00BCD4' },
  { name: 'Carbon Footprint', value: 65, fill: '#8BC34A' },
  { name: 'Water Conservation', value: 83, fill: '#3B82F6' },
  { name: 'Waste Reduction', value: 72, fill: '#FF9800' },
];

const packagingReductionData = [
  { name: 'Jan', traditional: 100, sustainable: 20 },
  { name: 'Feb', traditional: 95, sustainable: 25 },
  { name: 'Mar', traditional: 85, sustainable: 35 },
  { name: 'Apr', traditional: 75, sustainable: 45 },
  { name: 'May', traditional: 65, sustainable: 55 },
];

const Home = () => {
  const [theme, setTheme] = useState('light');
  const [timeFilter, setTimeFilter] = useState('monthly');
  const [greenbits, setGreenbits] = useState(1250);
  const [treesFromPurchases, setTreesFromPurchases] = useState(35);
  const [plasticSaved, setPlasticSaved] = useState(1250);
  const [waterSaved, setWaterSaved] = useState(8750);
  const [carbonReduced, setCarbonReduced] = useState(17936);

  const { scheduledPickups } = useReturnBox();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

 

  const ScheduledPickups = () => {
    if (!scheduledPickups || !scheduledPickups.length) return null;

    return (
      <div className="dashboard-row">
        <div className="card scheduled-pickups-card">
          <div className="card-header">
            <h2><FaBoxOpen /> Scheduled Box Pickups</h2>
          </div>
          <div className="card-content">
            {scheduledPickups.map(pickup => (
              <div key={pickup.id} className="pickup-details">
                <h3>Pickup Scheduled for {pickup.date}</h3>
                <div className="pickup-stats">
                  <div className="stat">
                    <FaLeaf />
                    <span>{pickup.totalGreenBits} Greenbits</span>
                  </div>
                  <div className="stat">
                    <FaTree />
                    <span>{pickup.totalTreesPlanted.toFixed(2)} Trees</span>
                  </div>
                  <div className="stat">
                    <FaRecycle />
                    <span>{pickup.totalCarbonSaved.toFixed(2)}kg CO₂ Saved</span>
                  </div>
                </div>
                <div className="products-count">
                  {pickup.products.length} boxes scheduled for pickup
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`dashboard-container ${theme}`}>

        <div className="header-controls">
          <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
            {theme === 'light' ? <FaLeaf /> : <FaLeaf />}
          </button>
        </div>
      

      <main className="dashboard-main-content">
        {/* Sustainability Impact Metrics Row */}
        <div className="dashboard-row sustainability-metrics-row">
          <div className="card impact-overview-card">
            <div className="card-header">
              <h2><FaGlobeAmericas /> Sustainability Impact Overview</h2>
              <FaInfoCircle className="info-icon" title="Key sustainability metrics from your eco-friendly purchases." />
            </div>
            <div className="card-content">
              <div className="impact-metrics-grid">
                <div className="impact-metric">
                  <div className="impact-icon plastic-icon">
                    <FaRecycle />
                  </div>
                  <div className="impact-data">
                    <div className="impact-value"><AnimatedNumber n={plasticSaved} /> kg</div>
                    <div className="impact-label">Plastic Saved</div>
                  </div>
                </div>
                <div className="impact-metric">
                  <div className="impact-icon water-icon">
                    <FaWater />
                  </div>
                  <div className="impact-data">
                    <div className="impact-value"><AnimatedNumber n={waterSaved} /> L</div>
                    <div className="impact-label">Water Conserved</div>
                  </div>
                </div>
                <div className="impact-metric">
                  <div className="impact-icon carbon-icon">
                    <FaLeaf />
                  </div>
                  <div className="impact-data">
                    <div className="impact-value"><AnimatedNumber n={carbonReduced} /> kg</div>
                    <div className="impact-label">CO₂ Emissions Reduced</div>
                  </div>
                </div>
                <div className="impact-metric">
                  <div className="impact-icon trees-icon">
                    <FaTree />
                  </div>
                  <div className="impact-data">
                    <div className="impact-value"><AnimatedNumber n={treesFromPurchases} /></div>
                    <div className="impact-label">Trees Planted</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">Your sustainable choices are making a real environmental difference!</div>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="card greenbits-card card-large">
            <div className="card-header">
              <h2><FaLeaf /> Greenbits Earned</h2>
              <FaInfoCircle className="info-icon" title="Total Greenbits earned from eco-friendly purchases." />
            </div>
            <div className="card-content">
              <div className="metric-value primary-metric">
                <AnimatedNumber n={greenbits} />
              </div>
              <p>Earn Greenbits by choosing sustainable products!</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${(greenbits % 5000) / 50}%` }} aria-valuenow={(greenbits % 5000) / 50} aria-valuemin="0" aria-valuemax="100">{(greenbits % 5000) / 50}% to Next Reward</div>
              </div>
              <p className="insight-text">Redeem Greenbits for discounts on future eco-friendly purchases.</p>
            </div>
            <div className="card-footer">Each purchase brings you closer to great rewards and a sustainable future!</div>
          </div>

          <div className="key-metrics-column">
            <div className="card metric-card">
              <div className="card-header">
                <h3><FaSeedling /> Sustainability Score</h3>
                <FaInfoCircle className="info-icon" title="Your overall sustainability rating based on purchase patterns." />
              </div>
              <div className="card-content">
                <div className="sustainability-score">
                  <div className="score-circle">
                    <div className="score-number">87</div>
                    <div className="score-label">EXCELLENT</div>
                  </div>
                </div>
                <p className="insight-text">You're in the top 15% of eco-conscious shoppers!</p>
              </div>
              <div className="card-footer">Keep making sustainable choices to improve your score.</div>
            </div>
            <div className="card metric-card">
              <div className="card-header">
                <h3><FaShoppingCart /> Eco Purchases</h3>
                <FaInfoCircle className="info-icon" title="Number of eco-friendly purchases made this month." />
              </div>
              <div className="card-content">
                <div className="metric-value"><AnimatedNumber n={42} /></div>
                <p>Eco-friendly products chosen this month.</p>
                <div className="progress-bar-container small-progress">
                  <div className="progress-bar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="insight-text">Making sustainable choices is becoming a habit!</p>
              </div>
              <div className="card-footer">Keep choosing green! Every purchase counts.</div>
            </div>
          </div>
        </div>

        {/* Sustainability Performance Charts */}
        <div className="dashboard-row">
          <div className="card chart-card">
            <div className="card-header">
              <h2><FaChartLine /> Carbon Footprint Reduction</h2>
              <FaInfoCircle className="info-icon" title="Trend of carbon emissions saved through eco-friendly purchases." />
            </div>
            <div className="card-content">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyPurchaseData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'CO₂ Saved (kg)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="carbonSaved" 
                    name="Carbon Emissions Saved" 
                    stroke="#2E7D32" 
                    fill="#8BC34A" 
                    fillOpacity={0.6} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="card-footer">Your eco-purchases have significantly reduced your carbon footprint!</div>
          </div>

          <div className="card chart-card">
            <div className="card-header">
              <h2><FaBoxOpen /> Packaging Waste Reduction</h2>
              <FaInfoCircle className="info-icon" title="Comparison between traditional and sustainable packaging used." />
            </div>
            <div className="card-content">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={packagingReductionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Packaging (kg)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="traditional" name="Traditional Packaging" fill="#FF9800" />
                  <Bar dataKey="sustainable" name="Sustainable Packaging" fill="#8BC34A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="card-footer">Your sustainable choices are helping reduce packaging waste!</div>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="card chart-card">
            <div className="card-header">
              <h2><FaChartPie /> Product Category Breakdown</h2>
              <FaInfoCircle className="info-icon" title="Distribution of purchases across different eco-friendly product categories." />
            </div>
            <div className="card-content pie-chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={productCategoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                    {productCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="card-footer">Explore new categories to maximize your positive impact!</div>
          </div>

          <div className="card chart-card">
            <div className="card-header">
              <h2><FaRecycle /> Sustainability Performance</h2>
              <FaInfoCircle className="info-icon" title="Key sustainability metrics and their performance levels." />
            </div>
            <div className="card-content">
              <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart 
                  cx="50%" 
                  cy="50%" 
                  innerRadius="20%" 
                  outerRadius="80%" 
                  barSize={20} 
                  data={sustainabilityImpactData}
                >
                  <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="value"
                  />
                  <Legend 
                    iconSize={10} 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                  />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="card-footer">Your sustainability metrics show strong performance across all categories!</div>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="card leaderboard-card">
            <div className="card-header">
              <h2><FaTrophy /> Top Eco-Champions</h2>
              <FaInfoCircle className="info-icon" title="Users with the most Greenbits and sustainable purchases." />
            </div>
            <div className="card-content">
              <ul>
                <li><span>EcoWarrior123</span> - <AnimatedNumber n={7850} /> Greenbits <FaLeaf style={{ color: 'var(--primary-green)' }} /></li>
                <li><span>GreenGuru42</span> - <AnimatedNumber n={52} /> Trees Planted <FaTree style={{ color: 'var(--secondary-green)' }} /></li>
                <li><span>SustainaStar</span> - <AnimatedNumber n={68} /> Purchases <FaShoppingCart style={{ color: 'var(--accent-blue)' }} /></li>
                <li><span>EarthLover99</span> - <AnimatedNumber n={4500} /> Greenbits <FaLeaf style={{ color: 'var(--primary-green)' }} /></li>
              </ul>
            </div>
            <div className="card-footer">Compete with friends and become a sustainability leader!</div>
          </div>

          <div className="card sustainability-goals-card">
            <div className="card-header">
              <h2><FaTrophy /> Sustainability Goals</h2>
              <FaInfoCircle className="info-icon" title="Track your progress toward sustainability milestones." />
            </div>
            <div className="card-content">
              <div className="goals-list">
                <div className="goal-item">
                  <div className="goal-info">
                    <div className="goal-title">Reduce 100kg of plastic waste</div>
                    <div className="goal-progress-bar">
                      <div className="goal-progress" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div className="goal-percentage">78%</div>
                </div>
                <div className="goal-item">
                  <div className="goal-info">
                    <div className="goal-title">Plant 50 trees</div>
                    <div className="goal-progress-bar">
                      <div className="goal-progress" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="goal-percentage">70%</div>
                </div>
                <div className="goal-item">
                  <div className="goal-info">
                    <div className="goal-title">Save 10,000L of water</div>
                    <div className="goal-progress-bar">
                      <div className="goal-progress" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div className="goal-percentage">87%</div>
                </div>
                <div className="goal-item">
                  <div className="goal-info">
                    <div className="goal-title">Reduce 20,000kg of CO₂</div>
                    <div className="goal-progress-bar">
                      <div className="goal-progress" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                  <div className="goal-percentage">89%</div>
                </div>
              </div>
            </div>
            <div className="card-footer">You're making great progress toward your sustainability goals!</div>
          </div>
        </div>
        <ScheduledPickups />
      </main>
      
    </div>
  );
};

export default Home;