import { Drawer } from 'flowbite'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'

const ModalDrawer = ({ children, className, ...props }) => {
    // Force this stupid drawer to open/close since the library is messing with us
    const [drawer, setDrawer] = useState([])

    useEffect(() => {
        // set the drawer menu element
        const $targetEl = document.getElementById(props.id)

        const drawerOptions = new Drawer($targetEl)

        setDrawer(drawerOptions)

        if (!props.done) return

        if (props.done) {
            // toggle the drawer
            drawer.toggle()
        }
    }, [props.done])

    useEffect(() => {
        if (props.pet?.id) drawer.toggle()
    }, [props.pet])

    const toggleDrawer = event => {
        drawer.toggle()
    }

    return (
        <>
            <Button
                className="bg-blue mb-10"
                type="button"
                data-drawer-target={props.id}
                aria-controls={props.id}
                onClick={toggleDrawer}>
                {props.title}
            </Button>
            <div
                id={props.id}
                className="fixed top-0 left-0 z-[100] h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-slate-200 w-80"
                tabIndex="-1"
                aria-labelledby={`${props.id}-label`}
                aria-hidden="true">
                <h5
                    id={`${props.id}-label`}
                    className="text-base font-semibold text-gray uppercase">
                    {props.title}
                </h5>
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls={props.id}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="pt-8 overflow-y-auto">{children}</div>
            </div>
        </>
    )
}

export default ModalDrawer
