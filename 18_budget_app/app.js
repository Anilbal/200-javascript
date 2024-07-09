function displayData(){
    let amount=document.getElementById("amount")
    let expenseTitle=document.getElementById("title")
    let expenseCost=document.getElementById("cost")
    let amountButton=document.getElementById("budget")
    let expenseButton=document.getElementById("expense")
    let totalAmount=document.getElementById('total-budget')
    let totalExpenses=document.getElementById('total-expense')
    let totalBalance=document.getElementById('total-balance')
    let lists=document.getElementById('lists')
    let amount_list=[];
    let expenses_list=[]

    //amount btn
    amountButton.addEventListener("click",()=>{
    totalAmount.innerText=`${amount.value}`
    })

    //
    console.log(expenses_list)


    //expense btn
    expenseButton.addEventListener("click",()=>{

        //expenses array
        amount_list.push(expenseCost.value)

        //expenses by deduting
        let totalBudget=amount.value
        let deductionAmt=amount_list.reduce((acc,cur)=>(acc-cur),totalBudget)
        let finalBalance=totalBudget-deductionAmt
        totalExpenses.innerText=`${finalBalance}`
        totalBalance.innerText=`${deductionAmt}`
        //creating single lists 
        let singleList=document.createElement('div')
        singleList.className="single-list"
        singleList.innerHTML=`
            <p>${expenseTitle.value}</p>
            <p>${expenseCost.value}</p>
            <p id="edit">Edit</p>
            <p id="delete">Delete</p>
        `
        lists.appendChild(singleList)
        document.getElementById("delete").addEventListener("click",()=>{
            lists.remove(singleList)
        })
        expenses_list.push(singleList)
    })

}
displayData()