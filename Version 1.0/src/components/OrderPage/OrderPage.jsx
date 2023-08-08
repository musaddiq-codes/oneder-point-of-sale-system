const OrderPage = () => {
    return (
        <div className='body-class'>
            <div style={{backgroundColor:'black'}}>
                <table style={{backgroundColor:'black'}}>
                    <tr style={{height:'50px'}}>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Table</th>
                        <th>items</th>
                        <th>Time</th>
                        <th>Order-Id</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                    <tr style={{height:'50px'}}>
                        <td>1</td>
                        <td>Ammit R</td>
                        <td>Table 1</td>
                        <td>3</td>
                        <td>6:25:23</td>
                        <td>order_KwwRRHY00Z66T</td>
                        <td>Sent To Kitchen</td>
                        <td>Remove</td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default OrderPage