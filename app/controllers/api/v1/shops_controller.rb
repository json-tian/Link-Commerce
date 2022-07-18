class Api::V1::ShopsController < ApplicationController
  before_action :set_shop, only: %i[ show update destroy ]

  # GET /shops
  def index
    @shops = Shop.where(shop_params)

    render json: @shops
  end

  # GET /shops/1
  def show
    render json: @shop
  end

  # POST /shops
  def create
    @shop = Shop.new(shop_params)

    if @shop.save
      render json: @shop, status: :created, location: api_v1_shop_url(@shop)
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shops/1
  def update
    if @shop.update(shop_params)
      render json: @shop
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shops/1
  def destroy
    @shop.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shop
      @shop = Shop.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def shop_params
      params.permit(:shop, :name, :description, :background, :subpage, :email)
    end
end
