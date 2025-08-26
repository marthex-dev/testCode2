const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

app.use(cors());
app.use(express.json());

const adminUser = { id: 1, username: 'admin', password: 'password' };

let nextId = 1;
let products = [];
let tickets = [];
let users = [];

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === adminUser.username && password === adminUser.password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

app.get('/api/products', authenticateToken, (req, res) => {
  res.json(products);
});

app.post('/api/products', authenticateToken, (req, res) => {
  const product = { id: nextId++, ...req.body };
  products.push(product);
  res.status(201).json(product);
});

app.put('/api/products/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return res.sendStatus(404);
  products[idx] = { ...products[idx], ...req.body };
  res.json(products[idx]);
});

app.delete('/api/products/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter((p) => p.id !== id);
  res.sendStatus(204);
});

app.get('/api/tickets', authenticateToken, (req, res) => {
  res.json(tickets);
});

app.post('/api/tickets', authenticateToken, (req, res) => {
  const ticket = { id: nextId++, replies: [], ...req.body };
  tickets.push(ticket);
  res.status(201).json(ticket);
});

app.put('/api/tickets/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  const idx = tickets.findIndex((t) => t.id === id);
  if (idx === -1) return res.sendStatus(404);
  tickets[idx] = { ...tickets[idx], ...req.body };
  res.json(tickets[idx]);
});

app.delete('/api/tickets/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  tickets = tickets.filter((t) => t.id !== id);
  res.sendStatus(204);
});

app.post('/api/tickets/:id/replies', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) return res.sendStatus(404);
  const reply = { id: nextId++, ...req.body };
  ticket.replies.push(reply);
  res.status(201).json(reply);
});

app.put('/api/tickets/:ticketId/replies/:replyId', authenticateToken, (req, res) => {
  const ticketId = parseInt(req.params.ticketId);
  const replyId = parseInt(req.params.replyId);
  const ticket = tickets.find((t) => t.id === ticketId);
  if (!ticket) return res.sendStatus(404);
  const idx = ticket.replies.findIndex((r) => r.id === replyId);
  if (idx === -1) return res.sendStatus(404);
  ticket.replies[idx] = { ...ticket.replies[idx], ...req.body };
  res.json(ticket.replies[idx]);
});

app.delete('/api/tickets/:ticketId/replies/:replyId', authenticateToken, (req, res) => {
  const ticketId = parseInt(req.params.ticketId);
  const replyId = parseInt(req.params.replyId);
  const ticket = tickets.find((t) => t.id === ticketId);
  if (!ticket) return res.sendStatus(404);
  ticket.replies = ticket.replies.filter((r) => r.id !== replyId);
  res.sendStatus(204);
});

app.get('/api/users', authenticateToken, (req, res) => {
  res.json(users);
});

app.post('/api/users', authenticateToken, (req, res) => {
  const user = { id: nextId++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.put('/api/users/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return res.sendStatus(404);
  users[idx] = { ...users[idx], ...req.body };
  res.json(users[idx]);
});

app.delete('/api/users/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
