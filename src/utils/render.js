import $ from 'jquery'

export const render = async(name, props) => {
    let element = (await import(`../pages/${name}.js`)).default
    let page = await element(props)
    $('#app').html(page)
}