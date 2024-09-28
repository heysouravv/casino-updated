import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const PolicyTabs = () => {
  const [categories] = useState({
    'T&C': [
      {
        id: 1,
        title: 'Terms & Conditions',
        content: `
          <ul class="list-disc pl-5 text-gray-400">
            <li>All bookings made through the Call Centre and Website are non-refundable</li>
            <li>Rescheduling or cancellation is not allowed within 24 hours of the scheduled date of visit</li>
            <li>One-time date change is allowed to reschedule the visit for a future date with an applicable difference amount payable depending on the pricing at the time of revision. Request to be placed 24 hours ahead of the scheduled date of visit</li>
            <li>If the pricing for the revised booking is of a lesser amount than your original booking, the remainder is not payable to Guest</li>
            <li>Cancellation due to valid medical emergencies is subject to a full refund. However, the same will be addressed post verification of submitted documents</li>
            <li>No cancellations/refunds are allowed for bookings made for blackout dates or at special rates</li>
            <li>No cancellations/refunds or transfer of tickets in case of no show or unutilized bookings</li>
            <li>Refunds shall be issued to the payment method used for the purchase of original tickets/packages. Once refund request is generated, the same will be processed within 10 working days</li>
            <li>No refund can be processed if a guest utilizes the playing coupons offered to them as part of their package</li>
            <li>Refund & Cancellation policy is subject to change without notice.</li>
            <li>Management's decision shall remain final.</li>
          </ul>
        `
      },
    ],
    'OTPC': [
      {
        id: 1,
        title: 'OTPC',
        content: `
          <ul class="list-disc pl-5 text-gray-400">
            <li>Roulette Table - Even Chances only.</li>
            <li>Baccarat - Only Primary bet (player) & no optional bet</li>
            <li>Andar Bahar - only andar</li>
            <li>Blackjack - Only primary bets no insurance & no surrender</li>
            <li>OTPC cannot be encashed</li>
            <li>OTPC cannot be played on the slot machines/evona/indian flush</li>
            <li>OTPC can only be played once regardless of the outcome of the game it will be retained by the dealer</li>
            <li>OTPC are in denominations of 500 & cannot be broken down to lower denominations</li>
            <li>Management decision is final</li>
          </ul>
        `
      },
    ],
    'General': [
      {
        id: 1,
        title: 'General Information',
        content: `
          <ul class="list-disc pl-5 text-gray-400">
            <li>Dress Code: Smart Casuals</li>
            <li>Carry Govt ID</li>
            <li>Entry age 21+</li>
            <li>Entry valid till 06:00 am</li>
          </ul>
        `
      },
    ],
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-7 bg-black">
      <h4 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 gradient-text">
        Policies
      </h4>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-900 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-900 ring-white ring-opacity-60',
                  selected
                    ? 'bg-gray-800 shadow gradient-text'
                    : 'text-gray-400 hover:bg-gray-800/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-black-900 p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-900 ring-white ring-opacity-60'
              )}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="relative p-3 rounded-md"
                >
                  <h3 className="text-sm font-medium leading-5 text-white">
                    {post.title}
                  </h3>

                  <div
                    className="mt-1 text-sm text-gray-400 text-left"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default PolicyTabs;