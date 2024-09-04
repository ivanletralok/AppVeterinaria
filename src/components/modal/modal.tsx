import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface ModalCustomProps {
	title: string;
	children: ReactNode;
	show?: boolean | undefined;
	onClose: (value: boolean) => void;
}

export default function ModalCustom({ title, children, show, onClose}: ModalCustomProps) {
	//const showModal = useAppStore((state) => state.showModal);
	//const setShowModal = useAppStore((state) => state.setShowModal);
	

	return (
		<>
			<Transition appear show={show} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-10'
					onClose={onClose}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-black bg-opacity-70' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-2 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'>
								<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6'>
									<Dialog.Title
										as='h3'
										className='text-gray-900 text-xl font-extrabold my-3 text-center'>
										{title}
									</Dialog.Title>
									<div className='mt-2'>{children}</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
