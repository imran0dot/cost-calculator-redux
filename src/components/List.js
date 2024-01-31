import React from 'react';
import editImage from '../assets/images/edit.svg'
import deleteImage from '../assets/images/delete.svg'

const List = () => {
    return (
        <div class="conatiner_of_list_of_transactions">
            <ul>
                <li class="transaction income">
                    <p>Earned this month</p>
                    <div class="right">
                        <p>৳ 100</p>
                        <button class="link">
                            <img
                                class="icon"
                                alt='edit'
                                src={editImage}
                            />
                        </button>
                        <button class="link">
                            <img
                                class="icon"
                                alt='delete'
                                src={deleteImage}
                            />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default List;