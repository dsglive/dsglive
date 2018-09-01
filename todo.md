# Todo
## ***Customer Report***
- [x] Inventory item search function ie: date range/shipper/ item number/ description
  - Add new API to fetch packages that is search
  - Save The Old packges to old packages
  - Save Fetch data to search_packages 
  - change the data table to show either old packages or search packages when toggle a button

## ***Client Report***
### Index and PDF
- [x] Client Inventory report add bin number/ must be sortable by bin #/ need PDF
  - Add bin number on the pdf
  - Add on The Controller For the Api to Add A Sort by bin #

## ***Damage Report***
### Index
- [x] If Damaged item is repaired is shouldnt show on the Damaged Report Already
### View
- [  ] Damage item report needs completed status accessible from report currently have to go back to receiving to change repair status because repair status is locked from action page
  - make this link editable `http://dsglive.test/reports/package/2/view` 
  - add a status for repaired
### PDF
- [  ] Damage item report does not need PO#/ Needs Bin #


## ***Invoicing***

### Controller Generate Invoice and Fetch Billables
- [  ] Calculate Storage Fee Retroactive Even if it still not yet delivered, the current model is the Storage Fee is being calculated Only After it is delivered.

### Invoices
- [  ] Add a Send Invoice To Customer Individual and Mass Mail
- [  ] Show Invoices For Specific Customer on Their Dashboard
- [  ] ALL fields that display money must be in $XXX.XX format. $535.50 

### Customer Invoice Report
- Search by Customer Name then Show All Invoices
  - [  ] UI
  - [  ] Controller
- [  ]  Add button to Show Customer Report Invoice Report
  - https://dsglive.com/invoices/customer-invoice-report
  - [example.pdf](./z-resources/customer-invoice-report.pdf) 
- [  ] Add A PDF Button on 
### Client Invoice Report
- [  ] Search By Customer Name Then Search By Client Name
  - Add Ui
  - Add Controller
  - Add Button to Show Client Invoice Report
    - https://dsglive.com/invoices/client-invoice-report
    - [example.pdf](./z-resources/client-invoice-report.pdf) 

## ***Payments***
- [ ] Create new Tables payments
- [ ] Create New Model Payment
- [ ] Add Controller To Create, Update, Delete Payments
  - On Delete We Need To Automatically Change The Current Balance of the User

## ***Balance***
- [ ] Add Balance Table which Add new balance if there is a new Invoice, if The Invoice is Deleted We need to Also Delete The Associated Balance and Adjust The Total Accordingly
- [ ] Add A new Link to Show All Customer Current Balance.

## ***Logistics***
- [ ] Add A Way To Create Delivery PDF Without Charges


