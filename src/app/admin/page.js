'use client'

import { useState, useEffect } from 'react'
import { login } from '@/lib/api'
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '@/features/services/api'
import {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
  replyTicket,
} from '@/features/tickets/api'
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '@/features/users/api'

export default function AdminPage() {
  const [token, setToken] = useState(null)
  const [auth, setAuth] = useState({ username: '', password: '' })

  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState('')

  const [tickets, setTickets] = useState([])
  const [ticketTitle, setTicketTitle] = useState('')

  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await login(auth.username, auth.password)
    setToken(res.token)
  }

  useEffect(() => {
    if (token) {
      fetchAll()
    }
  }, [token])

  const fetchAll = async () => {
    const [p, t, u] = await Promise.all([
      getProducts(token),
      getTickets(token),
      getUsers(token),
    ])
    setProducts(p)
    setTickets(t)
    setUsers(u)
  }

  const addProduct = async () => {
    if (!productName) return
    const p = await createProduct({ name: productName }, token)
    setProducts([...products, p])
    setProductName('')
  }

  const updateProductName = async (id) => {
    const name = prompt('New name')
    if (!name) return
    const p = await updateProduct(id, { name }, token)
    setProducts(products.map((i) => (i.id === id ? p : i)))
  }

  const removeProduct = async (id) => {
    await deleteProduct(id, token)
    setProducts(products.filter((p) => p.id !== id))
  }

  const addTicket = async () => {
    if (!ticketTitle) return
    const t = await createTicket({ title: ticketTitle }, token)
    setTickets([...tickets, t])
    setTicketTitle('')
  }

  const updateTicketTitle = async (id) => {
    const title = prompt('New title')
    if (!title) return
    const t = await updateTicket(id, { title }, token)
    setTickets(tickets.map((i) => (i.id === id ? t : i)))
  }

  const removeTicket = async (id) => {
    await deleteTicket(id, token)
    setTickets(tickets.filter((t) => t.id !== id))
  }

  const replyToTicket = async (id) => {
    const message = prompt('Reply')
    if (!message) return
    await replyTicket(id, { message }, token)
  }

  const addUser = async () => {
    if (!username) return
    const u = await createUser({ username }, token)
    setUsers([...users, u])
    setUsername('')
  }

  const updateUserName = async (id) => {
    const name = prompt('New username')
    if (!name) return
    const u = await updateUser(id, { username: name }, token)
    setUsers(users.map((i) => (i.id === id ? u : i)))
  }

  const removeUser = async (id) => {
    await deleteUser(id, token)
    setUsers(users.filter((u) => u.id !== id))
  }

  return (
    <div className="p-4 space-y-8">
      {!token ? (
        <form onSubmit={handleLogin} className="space-y-2 max-w-sm">
          <input
            value={auth.username}
            onChange={(e) => setAuth({ ...auth, username: e.target.value })}
            placeholder="Username"
            className="p-2 text-black w-full"
          />
          <input
            type="password"
            value={auth.password}
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            placeholder="Password"
            className="p-2 text-black w-full"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white w-full"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <div className="flex space-x-2 mb-2">
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Name"
                className="p-2 text-black flex-1"
              />
              <button
                onClick={addProduct}
                className="px-4 py-2 bg-green-500 text-white"
              >
                Add
              </button>
            </div>
            <ul className="space-y-1">
              {products.map((p) => (
                <li key={p.id} className="flex justify-between">
                  <span>{p.name}</span>
                  <span className="space-x-2">
                    <button
                      onClick={() => updateProductName(p.id)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeProduct(p.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Tickets</h2>
            <div className="flex space-x-2 mb-2">
              <input
                value={ticketTitle}
                onChange={(e) => setTicketTitle(e.target.value)}
                placeholder="Title"
                className="p-2 text-black flex-1"
              />
              <button
                onClick={addTicket}
                className="px-4 py-2 bg-green-500 text-white"
              >
                Add
              </button>
            </div>
            <ul className="space-y-1">
              {tickets.map((t) => (
                <li key={t.id} className="flex justify-between">
                  <span>{t.title}</span>
                  <span className="space-x-2">
                    <button
                      onClick={() => updateTicketTitle(t.id)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => replyToTicket(t.id)}
                      className="text-green-500"
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => removeTicket(t.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <div className="flex space-x-2 mb-2">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="p-2 text-black flex-1"
              />
              <button
                onClick={addUser}
                className="px-4 py-2 bg-green-500 text-white"
              >
                Add
              </button>
            </div>
            <ul className="space-y-1">
              {users.map((u) => (
                <li key={u.id} className="flex justify-between">
                  <span>{u.username}</span>
                  <span className="space-x-2">
                    <button
                      onClick={() => updateUserName(u.id)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeUser(u.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  )
}
