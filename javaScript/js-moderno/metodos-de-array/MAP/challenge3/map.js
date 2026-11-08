// Situação real: um restaurante precisa atualizar o status dos pedidos ao longo do dia.
// Cada pedido possui um cliente, uma situação e uma lista de produtos.
// O pedido de número 103 ficou pronto para entrega

// O sistema deverá:
// - Encontrar o pedido com id: 103.
// - Alterar apenas seu status para "ready".
// - Manter os demais pedidos sem alterações.
// - Preservar todas as propriedades do pedido, inclusive items.
// - Não modificar os objetos do array original.

"use strict"

const orders = [
    {
        id: 101,
        customer: "Ana",
        status: "pending",
        items: [
            { name: "Hambúrguer", quantity: 2 },
            { name: "Refrigerante", quantity: 2 }
        ]
    },
    {
        id: 102,
        customer: "Bruno",
        status: "preparing",
        items: [
            { name: "Pizza", quantity: 1 }
        ]
    },
    {
        id: 103,
        customer: "Carlos",
        status: "preparing",
        items: [
            { name: "Lasanha", quantity: 3 }
        ]
    }
]

const ordersUpdated = orders.map((order) => {
    if(order.id === 103) {
        return {
            ...order,
            status: "ready"
        }
    }

    return order
})

console.log(ordersUpdated);
console.log(orders);