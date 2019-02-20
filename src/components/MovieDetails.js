import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../Actions/actionCreaters";

class MovieDetails extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        const { error, loading, products } = this.props;

        if(error) {
            return <div>Error! {error.message}</div>;
        }

        if(loading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
               {Object.keys(products).map(
                   key => <li key={key}>{key}</li>)}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(MovieDetails);

