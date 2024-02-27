import React from 'react'

export default function Footer() {
    const categories = [
        {
            id: 1,
            title: 'Web Builder',
            link: '/'
        },
        {
            id: 2,
            title: 'Hosting',
            link: '/'
        },
        {
            id: 3,
            title: 'Data Center',
            link: '/'
        },
        {
            id: 4,
            title: 'Robotic-Automation',
            link: '/'
        }
    ]

    const contact = [
        {
            id: 1,
            title: 'Contact',
            link: '/'
        },
        {
            id: 2,
            title: 'Privacy Policy',
            link: '/'
        },
        {
            id: 3,
            title: 'Terms Of Service',
            link: '/'
        },
        {
            id: 4,
            title: 'Categories',
            link: '/'
        },
        {
            id: 5,
            title: 'About',
            link: '/'
        }
    ]

    const countries = [
        "India",
        "Canada",
        "China",
        "Japan",
        "Germany",
        "France",
        "United Kingdom"
    ]

    return (
        <footer className='bg-[#212731] w-full '>
            <div className="flex justify-between text-left h-96 mx-80 py-20 ">
                <div className="">
                    <h4 className='uppercase text-white mb-6 text-[16px] '>categories</h4>
                    <div className="space-y-4">
                        {
                            categories.map((category, index) => {
                                return (
                                    <div className='flex flex-col items-start justify-center' key={category.id}>
                                        <a href={category.link} className='text-white'>{category.title}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <h4 className='uppercase text-white mb-6 text-[16px]'>Contact</h4>
                    <div className="space-y-4">
                        {
                            contact.map((contact, index) => {
                                return (
                                    <div className='flex flex-col items-start justify-center ' key={contact.id}>
                                        <a href={contact.link} className='text-white '>{contact.title}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-40">
                    <select name="country" id="country" className='bg-[#212731] text-white'>
                        <option className='text-white' value="US" selected>United States</option>
                        {
                            countries.map(country => (
                                <option className='text-white' key={country} value={country} />
                            ))
                        }
                    </select>
                </div>
            </div>
        </footer>
    )
}
