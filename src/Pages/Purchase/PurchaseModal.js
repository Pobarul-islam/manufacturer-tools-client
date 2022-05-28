import React from 'react';

const PurchaseModal = () => {
    return (
        <div>

            <a href="#my-modal-2" class="btn">open modal</a>

            <div class="modal" id="my-modal-2">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <a href="#" class="btn">Yay!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;